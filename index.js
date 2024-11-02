// access environmental variables
import dotenv from "dotenv";
dotenv.config();

import http from "http";

// imports
import { ToadScheduler, SimpleIntervalJob, AsyncTask } from "toad-scheduler";
import chalk from "chalk";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { handlePostContentToTwitter } from "./configs/twitterConfig.js";
import { handlePostContentToFacebook } from "./configs/facebookConfig.js";
import {
  getRandomNumber,
  postTopics,
  removeSpecialCharacters,
} from "./utils.js";

const PORT = process.env.PORT || 3000;

// create an instance of google AI with your Google Api Key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// create an instance of Toad scheduler
const scheduler = new ToadScheduler();

// create an async task
const task = new AsyncTask("auto post task", async () => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let prompt = `Write a Twitter-style post about ${
    postTopics[getRandomNumber(postTopics.length)]
  } that captures attention in the first few words. The post should:
    - Feel authentic and conversational
    - Include an interesting fact, observation, or personal insight
    - Create engagement through a thought-provoking statement or question
    - End with 2-3 relevant hashtags
    - Stay under 279 characters
    - Avoid clichés and corporate-speak

    Extra points for adding humor or a clever twist!

    For example:
    Bad: "Just learned about rainbows. They're cool. #science #nature"
    Good: "Mind blown: turns out rainbows aren't actually in a specific location - everyone sees their own personal rainbow from a different spot 🌈 Makes me feel special ngl #science #mindblown`;

  // generate the content from google AI
  model
    .generateContent(prompt)
    .then((result) => {
      const contentToPost = removeSpecialCharacters(result.response.text());
      // post the content to your social accounts
      // ** more to be added **
      Promise.allSettled([
        handlePostContentToFacebook(contentToPost),
        handlePostContentToTwitter(contentToPost),
      ]);
      // ****more social media account will be added soon****
    })
    .catch((error) => {
      console.log("Error occured");
    });
});

// Adjust the job interval to suit your usage.
// presently this is going to run at every 5 hours provided the server is always running
const job = new SimpleIntervalJob({ hours: 5 }, task);

// start up the job
scheduler.addSimpleIntervalJob(job);

// when stopping your app
// scheduler.stop();

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.send("hello world");
  }
});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));

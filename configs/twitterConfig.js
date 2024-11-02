// access environmental variables
import dotenv from "dotenv";
dotenv.config();
import { TwitterApi } from "twitter-api-v2";
import chalk from "chalk";

// env values
const APP_KEY = process.env.TWITTER_CONSUMER_API_KEY;
const APP_SECRET = process.env.TWITTER_CONSUMER_API_SECRET;
const ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN;
const ACCESS_TOKEN_SECRET = process.env.TWITTER_ACCESS_TOKEN_SECRET;

// OAuth 1.0a (User context)
const userClient = new TwitterApi({
  appKey: APP_KEY,
  appSecret: APP_SECRET,
  // Following access tokens are not required if you are
  // at part 1 of user-auth process (ask for a request token)
  // or if you want a app-only client (see below)
  accessToken: ACCESS_TOKEN,
  accessSecret: ACCESS_TOKEN_SECRET,
});

const handlePostContentToTwitter = async (contentToPost) => {
  userClient
    .post("https://api.twitter.com/2/tweets", {
      text: contentToPost,
    })
    .then((result) => {
      console.log(
        `${chalk.bgBlack.bold("Posted successfully to X:")}`,
        result.data
      );
    })
    .catch((err) => {
      console.log(
        `${chalk.bgRed.bold("Error occurred while posting to X:")}`,
        err.response
      );
    });
};

export { handlePostContentToTwitter };

// handlePostContentToTwitter("Hello");

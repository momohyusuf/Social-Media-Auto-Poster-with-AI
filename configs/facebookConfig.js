import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import chalk from "chalk";

const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
const page_id = process.env.FACEBOOK_PAGE_ID;

const handlePostContentToFacebook = (contentToPost) => {
  axios
    .post(
      `https://graph.facebook.com/v19.0/${page_id}/feed?access_token=${accessToken}`,
      {
        message: contentToPost,
      }
    )
    .then((response) => {
      console.log(
        `${chalk.bgBlue.bold("Posted successfully to facebook:")}`,
        response.data
      );
    })
    .catch((error) => {
      console.log(
        `${chalk.bgBlue.bold("Error occurred while posting to facebook:")}`,
        error.response.data
      );
    });
};

export { handlePostContentToFacebook };

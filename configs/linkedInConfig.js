import { RestliClient } from "linkedin-api-client";
const restliClient = new RestliClient();

// still trying to figure out how to get a linkedin user urn:li:person:ID
const handlePostContentToLinkedIn = async () => {
  try {
    const response = await restliClient.get({
      resourcePath: "/me",
      accessToken: process.env.LINKEDIN_ACCESS_TOKEN,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { handlePostContentToLinkedIn };

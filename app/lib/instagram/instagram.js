

import { axiosFetch, getHeaders } from "@/app/lib/utils";
import { BadRequest } from "@/app/exceptions/index";

import { fetchFromAPI } from "./instagramAPI";
import { fetchFromPage } from "./instagramScraper";

export const  getPostId = (postUrl) => {
  const postRegex =
    /^https:\/\/(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)\/?/;
  const reelRegex =
    /^https:\/\/(?:www\.)?instagram\.com\/reels?\/([a-zA-Z0-9_-]+)\/?/;
  let postId;

  if (!postUrl) {
    throw new BadRequest("Instagram URL was not provided");
  }
  const postCheck = postUrl.match(postRegex);
  console.log("postCheckURl",postCheck);

  if (postCheck) {
    console.log("postCheck",postCheck);
    postId = postCheck.at(-1);
    console.log("postIDPost",postId);
  }
  console.log("URL CHECKING ::: ",postUrl)

  const reelCheck = postUrl.match(reelRegex);
  console.log("rEELcHECKuRL",reelCheck);

  if (reelCheck) {
    console.log("postID",postId);
    postId = reelCheck.at(-1);
    console.log("postIDReel",postId);
  }
   
  if (!postId) {
    throw new BadRequest("Instagram post/reel ID was not found");
  }

  return postId;
};

export const pageExist = async ({ postUrl, timeout }) => {
  const headers = getHeaders();
  console.log("Header:",headers);
  const apiUrl = postUrl;
  try {
    await axiosFetch({
      url: apiUrl,
      method: "HEAD",
      throwError: true,
      headers,
      timeout,
    });
  } catch (error) {
    if (error.message.includes("404")) {
      return false;
    }
  }

  return true;
};

export const fetchPostJson = async (postID, timeout) => {
  const postUrl = "https://www.instagram.com/p/" + postID;
  

   
  const isPageExist = await pageExist({ postUrl, timeout });
  if (!isPageExist) {
    throw new BadRequest("This post page isn't available.", 404);
  }

  const pageJson = await fetchFromPage({ postUrl, timeout });
  if (pageJson) return pageJson;

  const apiJson = await fetchFromAPI({ postUrl, timeout });
  if (apiJson) return apiJson;

  throw new BadRequest(
    "The video download link for this post is not available.",
    401
  );
};

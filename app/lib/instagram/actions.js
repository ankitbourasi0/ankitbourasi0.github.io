"use server";

import { Exception } from "@/app/exceptions/index";
import { getPostId, fetchPostJson } from "@/app/lib/instagram/instagram";
import { makeErrorResponse, makeSuccessResponse } from "../utils";


function handleError(error) {
  if (error) {
    return makeErrorResponse(error.message);
  } else {
    console.error(error);
    return makeErrorResponse();
  }
}

export async function fetchVideoInfoAction(postUrl) {
  let postId;
  
  try {
    postId = getPostId(postUrl);
  } catch (error) {
    return handleError(error);
  }

  try {
    const videoInfo = await fetchPostJson(postId);
    // console.log("videoInfo",videoInfo);
    const response = makeSuccessResponse(videoInfo);
    return response;
  } catch (error) {
    return handleError(error);
  }
}

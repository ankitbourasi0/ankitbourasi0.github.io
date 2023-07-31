import { load } from "cheerio";


import { axiosFetch, getHeaders, getTimedFilename } from "@/app/lib/utils";
import { BadRequest } from "@/app/exceptions/index";
import { enableScraper } from "@/app/configs/instagram";

const formatPageJson = (json) => {
  let scrapedPost;

  if (Array.isArray(json)) {
    scrapedPost = json.find((item) => item.video);
  } else {
    scrapedPost = json;
  }

  if (!scrapedPost) {
    return null;
  }

  const videoList = scrapedPost.video;

  if (!videoList) {
    throw new BadRequest("This post does not contain a video");
  }

  if (videoList.length === 0) {
    throw new BadRequest("This post does not contain a video");
  }

  const video = videoList[0];

  const filename = getTimedFilename("instagram-saver", "mp4");

  const videoJson = {
    filename: filename,
    width: video.width,
    height: video.height,
    videoUrl: video.contentUrl,
  };

  return videoJson;
};

export const fetchFromPage = async ({ postUrl, timeout }) => {
  const headers = getHeaders();

  if (!enableScraper) {
    console.log("Instagram Scraper is disabled in @config/instagram");
    return null;
  }

  const response = await axiosFetch({
    url: postUrl,
    headers,
    timeout,
  });

  console.log("rESPONSE START " ,response," rESPONSE ENDED")
  
  if (!response) {
    return null;
  }

  if (response.statusText !== "OK") {
    return null;
  }

  const $ = load(response.data);
  // console.log("#$$$$$$$$4   :   ", $,"jefiaenfkjanefkj        \n" );
  const jsonElement = $("script[type='application/ld+json']");
    
  if (jsonElement.length === 0) {
    console.log("LD+JSON not available for this post");
    return null;
  }


  const jsonText = jsonElement.text();
  const json = JSON.parse(jsonText);
  const formattedJson = formatPageJson(json);


  return formattedJson;
};

"use client";

import { useState } from "react";
import { DownloadButton } from "./DownloadButton";
import { Exception, ClientException } from "@/app/exceptions";
import { fetchVideoInfoAction } from "@/app/lib/instagram/actions";
import { Toaster, toast } from "react-hot-toast";

const validateInput = (postUrl) => {
  if (!postUrl) {
    throw new ClientException(
      "Instagram URL was not provided, Please Enter a Instagram URL"
    );
  }

  if (!postUrl.includes("instagram.com/")) {
    throw new ClientException("Invalid URL! does not belong to Instagram");
  }

  if (!postUrl.startsWith("https://")) {
    throw new ClientException(
      'Invalid URL it should start with "https://www.instagram.com..."'
    );
  }

  const postRegex =
    /^https:\/\/(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)\/?/;

  const reelRegex =
    /^https:\/\/(?:www\.)?instagram\.com\/reels?\/([a-zA-Z0-9_-]+)\/?/;

  if (!postRegex.test(postUrl) && !reelRegex.test(postUrl)) {
    throw new ClientException(
      "URL does not match with any Instagram post or reel"
    );
  }
};

const downloadVideo = async (filename, downloadUrl) => {
  try {
    await fetch(downloadUrl)
      .then((response) => response.blob())
      // Once the response is obtained from the server, this .then() block is used to extract the binary data of the file as a Blob object. 
      // A Blob (Binary Large Object) represents raw data, such as images or videos.
      .then((blob) => {
        // .then((blob) => { ... }): After obtaining the Blob object, this .then() block is executed, 
        // which creates a local URL for the Blob using URL.createObjectURL(blob). This local URL can be used to reference the Blob data.
        const blobUrl = URL.createObjectURL(blob);

        const a = document.createElement("a");
         // a.target = "_blank";: The anchor element's target attribute is set to _blank, 
        // which means the link will open in a new tab/window when clicked.
        a.target = "_blank";
       
        // a.href = blobUrl;: The href attribute of the anchor element is set to the local URL created in step 5, which is the Blob data URL.
        a.href = blobUrl;
//         a.download = filename;: The download attribute of the anchor element is set to the filename, so when the user clicks the link, it will prompt them to download the file with the specified name.

// document.body.appendChild(a);: The anchor element is appended to the <body> of the HTML document. This is done temporarily to trigger the download process in the next step.

// a.click();: The anchor element is programmatically clicked, which initiates the download process.

// a.remove();: After the download is triggered, the anchor element is removed from the DOM to clean up.
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        toast.success(
          "Video Download Succesfully 😊",
          (options = { duration: 4000 })
        );
      });
    console.log(ok);
  } catch (error) {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = downloadUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    console.log(error);
  }
};

const fetchVideo = async (postUrl) => {
  console.log("FetchVideo", postUrl);
  const response = await fetchVideoInfoAction(postUrl);

  if (response.status === "error") {
    throw new ClientException(response.message);
  }

  const { filename, videoUrl } = response.data;
  await downloadVideo(filename, videoUrl);

  return true;
};

export default function InstagramForm() {
  const [postUrl, setPostUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleError(error) {
    if (error) {
      setErrorMsg(error.message);
    } else {
      console.error(error);
      setErrorMsg(
        "Something went wrong, if this problem persists contact the developer."
      );
    }
    setIsLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    console.log("HandleSubmit", postUrl);
    try {
      validateInput(postUrl);
    } catch (error) {
      return handleError(error);
    }

    try {
      const isSuccess = await fetchVideo(postUrl);
      if (isSuccess) setErrorMsg("");
    } catch (error) {
      return handleError(error);
    }

    setIsLoading(false);
  }

  return (
    <>
      {errorMsg !== "" && (
        <div className="mb-1 text-sm text-red-500 md:text-base">{errorMsg}</div>
      )}
      <Toaster position="top-center" />

      <form
        className="flex flex-col items-center gap-4 motion-safe:animate-[animate-up_1.5s_ease-in-out_1] md:flex-row md:gap-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="url-input" className="sr-only">
          instagram URL input
        </label>
        <input
          id="url-input"
          type="url"
          value={postUrl}
          autoFocus={true}
          onChange={(e) => setPostUrl(e.target.value)}
          placeholder="e.g. https://www.instagram.com/p/Qpb744hdnf"
          aria-label="Instagram video download URL input"
          title="Instagram video download URL input"
          className="w-full rounded border border-slate-100 px-2 py-3 placeholder-gray-400/80 drop-shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-none dark:focus:ring-2 dark:focus:ring-zinc-400  dark:bg-neutral-800  dark:text-white dark:placeholder-gray-400"
        />
        <DownloadButton isLoading={isLoading} />
      </form>
    </>
  );
}

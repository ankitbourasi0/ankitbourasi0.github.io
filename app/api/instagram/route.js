// import { NextResponse } from "next/server";
// import { Exception } from "@/exceptions";
// import { getPostId, fetchPostJson } from "@/lib/instagram";
// import { enableServerAPI } from "@/configs/instagram";
// import { makeErrorResponse, makeSuccessResponse } from "@/lib/utils";


// function handleError(error) {
//   if (error instanceof Exception) {
//     const response = makeErrorResponse(error.message);
//     return NextResponse.json(response, { status: error.code });
//   } else {
//     console.error(error);
//     const response = makeErrorResponse();
//     return NextResponse.json(response, { status: 500 });
//   }
// }

// export async function GET(request) {
//   if (!enableServerAPI) {
//     return NextResponse.json({ error: "Not Implemented" }, { status: 501 });
//   }

//   const { searchParams } = new URL(request.url);
//   const url = searchParams.get("url");
//   let postId;

//   try {
//     postId = getPostId(url);
//   } catch (error) {
//     return handleError(error);
//   }

//   try {
//     const postJson = await fetchPostJson(postId);
//     const response = makeSuccessResponse(postJson);
//     return NextResponse.json(response, { status: 200 });
//   } catch (error) {
//     return handleError(error);
//   }
// }

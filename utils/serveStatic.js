import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export const serveStatic = async (baseDir, request, response) => {
  const publicDir = path.join(baseDir, "public");
  const filePath = path.join(
    publicDir,
    request.url === "/" ? "index.html" : request.url
  );
  const ext = path.extname(filePath);
  const contentType = getContentType(ext);

  try {
    const content = await fs.readFile(filePath);
    sendResponse(response, content, contentType, 200);
  } catch (error) {
    const content = await fs.readFile(path.join(publicDir, "404.html"));
    error.code === "ENOENT"
      ? sendResponse(response, content, "text/html", 404)
      : sendResponse(
          response,
          `<html><h1>Server Error: ${err.code}</h1></html>`,
          "text/html",
          500
        );
  }
};

import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";

export const serveStatic = async (baseDir, response) => {
  const filePath = path.join(baseDir, "public", "index.html");

  try {
    const content = await fs.readFile(filePath);
    sendResponse(response, content, "text/html", 200);
  } catch (error) {
    console.log(error);
  }
};

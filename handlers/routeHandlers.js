import { parseJSONBody } from "../public/parseJSONBody.js";
import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { addNewSighting } from "../utils/addNewSighting.js";

// handleGet

export const handleGet = async (response) => {
  const data = await getData();
  const dataJSON = JSON.stringify(data);
  sendResponse(response, dataJSON, "application/json", 200);
};

// handlePost

export const handlePost = async (request, response) => {
  try {
    const parsedBody = await parseJSONBody(request);
    await addNewSighting(parsedBody);
    sendResponse(response, JSON.stringify(parsedBody), "application/json", 201);
  } catch (error) {
    sendResponse(response, JSON.stringify({error: error}), "application/json", 400);
  }
};

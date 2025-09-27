import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
// handleGet

export const handleGet = async (response) => {
    const data = await getData();
    const dataJSON = JSON.stringify(data);
    sendResponse(response, dataJSON, "application/json", 200);
}
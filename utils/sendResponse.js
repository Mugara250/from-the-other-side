export const sendResponse = (response, payload, contentType, statusCode) => {
    response.setHeader("Content-Type", contentType);
    response.statusCode = statusCode;
    response.end(payload);
}
export const parseJSONBody = async (response) => {
  let body = "";
  for await (const chunk of response) {
    body += chunk.toString();
  }
  try {
    return JSON.parse(body);
  } catch (error) {
    throw new Error(`Invalid JSON format: ${error}`);
  }
};

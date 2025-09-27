import path from "node:path";
import fs from "node:fs/promises";

export const getData = async () => {
  const pathJSON = path.join("data", "data.json");
  try {
    const data = await fs.readFile(pathJSON, "utf-8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    return [];
  }
};

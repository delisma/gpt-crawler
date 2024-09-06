import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://tailwindcss.com/docs",
  match: "https://tailwindcss.com/docs/**/*",
  selector: "body",
  maxPagesToCrawl: 3500,
  outputFileName: "tailwindcss.com.json",
};

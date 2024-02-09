import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  e2e: {
    baseUrl: "https://computer-database.gatling.io/computers",
  },
});

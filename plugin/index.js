import { resolve } from "path";
import { appendFile } from "fs/promises";

// import { setTimeout } from "timers/promises";

export const onPostBuild = async function () {
  console.log("start plugin");
  // await setTimeout(10 * 1000);
  appendFile(
    resolve("./dist/index.html"),
    `<div>Plugin run ${new Date()}</div>`
  );
  console.log("done plugin");
};

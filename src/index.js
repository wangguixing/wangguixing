/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-07 23:54:04
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-31 21:29:42
 * @FilePath: \wangguixing\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require("dotenv").config();

const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
const prettify = require("html-prettify");
const dayjs = require("dayjs");

const data = require("./constants/data");
const tplPath = path.join(__dirname, "./template.ejs");
const outputPath = path.join(__dirname, "../README.md");

const main = async () => {
  const updatedAt = dayjs().format("YYYY年MM月DD日 HH时mm分");

  const tplStr = fs.readFileSync(tplPath, "utf8");

  const html = ejs.render(tplStr, {
    ...data,
    updatedAt,
  });

  const prettyHtml = prettify(html);

  fs.writeFileSync(outputPath, prettyHtml);
};

main().then();

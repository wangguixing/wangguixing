/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-07 23:54:04
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-03 22:39:03
 * @FilePath: \src\constants\data.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const badges = require("./badges");

const data = {
  socials: [],
  books: [
    {
      logo: "🔥",
      name: "arcro-vue",
      desc: "",
      url: "",
      badges: [],
    },
  ],
  projects: [
    {
      logo: "",
      repo: "🌈arcro-vue",
      desc: "vue3，tsx，pinna，@arcro-design-vue",
      github: "https://github.com/wangguixing/arcro-vue",
      preview: "https://github.com/wangguixing/arcro-vue/blob/master/README.md",
      techList: [badges.Vue, , badges.TypeScript, badges.less],
      status: "1.0.0",
    },
  ],
};

module.exports = data;

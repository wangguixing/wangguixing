/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-07 23:54:04
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-11 23:12:43
 * @FilePath: \src\constants\data.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const badges = require("./badges");

const data = {
  socials: [],
  arti: [
    {
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
      desc: "vue3，vite，tsx，pinia，@arco-design-vue",
      github: "https://github.com/wangguixing/arcro-vue",
      techList: [badges.Vue, , badges.TypeScript, badges.less],
      status: "1",
      remark: "新增add-node-polyfill分支",
    },
    {
      logo: "",
      repo: "vue3-babylon-ts",
      desc: "babylonjs vue3 3D WebGl",
      github: "https://github.com/wangguixing/vue3-babylon-ts",
      techList: [badges.Vue, , badges.TypeScript, badges.babylonjs],
      status: "",
      remark: "",
    },
  ],
};

module.exports = data;

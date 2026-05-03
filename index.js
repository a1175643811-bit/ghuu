// 成人专用猫源 - 基于 stymei 格式
const sites = [
  {
    name: "🔞滴滴成人",
    api: "https://api.ddapi.cc/api.php/provide/vod",
    type: 3,
    searchable: true,
    quickSearch: true,
    filterable: true
  },
  {
    name: "🔞鸡坤成人",
    api: "https://jkunzyapi.com/api.php/provide/vod",
    type: 3,
    searchable: true,
    quickSearch: true,
    filterable: true
  },
  {
    name: "🔞奥斯卡成人",
    api: "https://aosikazy4.com/api.php/provide/vod",
    type: 3,
    searchable: true,
    quickSearch: true,
    filterable: true
  },
  {
    name: "🔞X细胞成人",
    api: "https://www.xxibaozyw.com/api.php/provide/vod",
    type: 3,
    searchable: true,
    quickSearch: true,
    filterable: true
  },
  {
    name: "🔞杏吧成人",
    api: "https://xingba111.com/api.php/provide/vod",
    type: 3,
    searchable: true,
    quickSearch: true,
    filterable: true
  }
];

const rule = {
  title: "🔞 成人专用源",
  version: "1.0",
  author: "Custom",
  sites: sites
};

module.exports = rule;

const rule = {
  title: "🔞 测试源",
  version: "1.0",
  author: "Test",
  sites: [
    { 
      name: "🔞滴滴测试", 
      api: "https://api.ddapi.cc/api.php/provide/vod", 
      type: 3, 
      searchable: true, 
      quickSearch: true, 
      filterable: false   // 关闭筛选，减少卡顿
    }
  ]
};

module.exports = rule;

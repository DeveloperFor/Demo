Page({
  /**
   * 初始化数据
   */
  data: {
    items: [
      { name: 'JAVA', value: 'Android', checked: 'true' },
      { name: 'Object-C', value: 'IOS' },
      { name: 'JSX', value: 'ReactNative' },
      { name: 'JS', value: 'wechat' },
      { name: 'Python', value: 'Web' }
    ]
  },

  listenCheckboxChange: function () {
    console.log(e.detail.value);
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  listenFormSubmit: function(e) {
    console.log(e)
  },
  listenFormReser: function(e) {
    console.log(e)
  }
})
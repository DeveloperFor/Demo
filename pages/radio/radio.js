Page({
  data: {
    array: [
      { name: 'Jave', value: 'Android', checked: 'true' },
      { name: 'Object-C', value: 'IOS' },
      { name: 'jsx', value: 'ReactNative' },
      { name: 'js', value: 'WeChat' },
      { name: 'Python', value: 'Web' },
    ]
  },
  /**
   * radio监听事件
   */
  listenerRadioGroup: function (e) {
    console.log(e);
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
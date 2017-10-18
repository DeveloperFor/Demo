Page({
  data: {
    nameA: 'xxxx'
  },
  onLoad: function(e) {

  },
  setName:function (e) {
    console.log(this.data)
    this.setData({
      nameA: "点击"
    })
  }
})
// pillow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bz1: 'https://cbu01.alicdn.com/img/ibank/2018/000/231/8496132000_31923763.jpg',
    bz13: 'https://cbu01.alicdn.com/img/ibank/2018/995/319/8462913599_31923763.jpg'
  },

  bz: function (e) {
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../bz/bz?id=' + id
    });
  },
})
  
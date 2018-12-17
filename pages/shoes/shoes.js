// shoes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tx1:   'https://cbu01.alicdn.com/img/ibank/2018/483/728/8464827384_31923763.jpg',
    tx8: 'https://cbu01.alicdn.com/img/ibank/2018/619/334/8465433916_31923763.jpg'
  },
  tx: function (e) {
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../tx/tx?id=' + id
    });
  },
})
// wo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 1,
    /**
 * 1
 */
    woxq1: 'https://cbu01.alicdn.com/img/ibank/2018/124/091/8377190421_31923763.jpg_.webp',
    woxq2: 'https://cbu01.alicdn.com/img/ibank/2018/394/065/8363560493_31923763.jpg_.webp',
    woxq3: 'https://cbu01.alicdn.com/img/ibank/2017/847/338/7915833748_1484409937.jpg',
    woxq4: 'https://cbu01.alicdn.com/img/ibank/2017/808/128/7915821808_1484409937.jpg',
    woxq5: 'https://cbu01.alicdn.com/img/ibank/2017/851/188/7915881158_1484409937.jpg',
    woxq6: 'https://cbu01.alicdn.com/img/ibank/2017/267/833/7928338762_1484409937.jpg',
    woxq7: 'https://cbu01.alicdn.com/img/ibank/2017/069/713/7928317960_1484409937.jpg',
    woxq8: 'https://cbu01.alicdn.com/img/ibank/2017/025/368/7915863520_1484409937.jpg',
    woxq9: 'https://cbu01.alicdn.com/img/ibank/2017/044/685/7939586440_1484409937.jpg',
    lxw: '/image/contactus.jpg',

  },
  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: '18802099133'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id

    })

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
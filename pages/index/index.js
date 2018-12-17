Page({
  data: {
    slider: ['https://cbu01.alicdn.com/img/ibank/2018/564/780/8356087465_31923763.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/203/001/8339100302_31923763.jpg',  'https://cbu01.alicdn.com/img/ibank/2018/377/451/8339154773_31923763.jpg' 

  ],
    swiperCurrent: 0, 
    tt:'https://cbu01.alicdn.com/img/ibank/2018/114/865/8379568411_31923763.jpg',
    gs3: 'https://cbu01.alicdn.com/img/ibank/2018/251/149/8366941152_31923763.jpg',
    gs4: '/image/fgs.jpg',
    lxw: '/image/contactus.jpg',

    tx1: 'https://cbu01.alicdn.com/img/ibank/2018/400/010/8380010004_31923763.jpg',
    tx2: 'https://cbu01.alicdn.com/img/ibank/2018/352/541/8380145253_31923763.jpg',
    tx3: 'https://cbu01.alicdn.com/img/ibank/2018/694/721/8380127496_31923763.jpg_.webp',
    tx4: 'https://cbu01.alicdn.com/img/ibank/2018/061/470/8394074160_31923763.jpg',
    tx5: 'https://cbu01.alicdn.com/img/ibank/2018/333/030/8349030333_31923763.jpg_.webp',
    tx6: 'https://cbu01.alicdn.com/img/ibank/2018/739/901/8380109937_31923763.jpg_.webp',
    tx7: 'https://cbu01.alicdn.com/img/ibank/2018/681/840/8349048186_31923763.jpg_.webp',
    tx8: 'https://cbu01.alicdn.com/img/ibank/2018/636/421/8380124636_31923763.jpg_.webp',
    tx9: 'https://cbu01.alicdn.com/img/ibank/2018/419/794/8366497914_31923763.jpg_.webp'
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    });
  },
  dh1: function (e) {
   wx.switchTab({
     url: '../sheepskin/sheepskin'
    });
  },
  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: '18802099133'
    })
  }
});

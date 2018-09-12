const app = getApp();
var amapFile = require('../../libs/amap-wx.js');
Page({
  data: {
    shopname: '小渔人海鲜大排档',
    address:"厦门市集美区软件园三期B02",
    purposeword:"小渔人海鲜，让大家享受最美味海鲜",
    shoplogo: "../../images/logo.png",
    shopposition: "../../images/position.png",
    shopphone: "../../images/phone.png",
    shoptime:"11:00-2:00",
    phonenum:"0592-8890777",
    phone:"05928890777",
    latitude:24.61218,
    longitude:118.049179,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 800,
    circular:true,
    imgUrls: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535106637858&di=285208afef8c1d5f503644b4dc581669&imgtype=0&src=http%3A%2F%2Fy3.ifengimg.com%2Ff94aeb60f82833f8%2F2015%2F0115%2Frdn_54b7aedf14693.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535106874136&di=ee2fdd2be9eaf38f5430a2f5ab7cb212&imgtype=0&src=http%3A%2F%2Fpic1.xtuan.com%2Fupload%2FcasePictures%2F20160610%2F17141617222_w.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535106897393&di=c430b7ca4c9ef4d03f46eefa761fafaa&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a891553cc91a00000025612639fe.jpg%401280w_1l_2o_100sh.png",
      "../../images/balance4.jpg",
      "../../images/balance5.jpg",
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
  },

  click: function (e) {
    var that=this;
    wx.openLocation({
      latitude: that.data.latitude,
      longitude: that.data.longitude,
      scale: 18,
      name: that.data.shopname,
      address: that.data.address
    })
  },
  calling: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber:that.data.phone,
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("请确认电话号码！")
      }
    })
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })

  },
  imgsee: function (e) {
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgUrls;
    wx.previewImage({
      current: imgArr[index],
      urls: imgArr,
      success: function (res) { console.log(res); },
      fail: function (res) { console.log(2); },
      complete: function (res) { console.log(3); },
    })
  }
})

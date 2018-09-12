var app = getApp();
Page({
  data: {
    winHeight: "",
    currentTab: 0, 
    tabs:[
      { tabtitle: "爆款菜品", tabIndex: "0"  },
      { tabtitle: "店长推荐", tabIndex: "1"  },
      { tabtitle: "时令海鲜", tabIndex: "2"  },
      { tabtitle: "外国进口", tabIndex: "3"  },
      { tabtitle: "店家主打", tabIndex: "4"  },
      { tabtitle: "酒水饮料", tabIndex: "5"  },
      { tabtitle: "其它", tabIndex: "6" }
    ],
    cateList: [
      {
        current:"0",
        list:
        [
          {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110245592&di=7020398570b85fc9d20923c526b605de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F8af41625801e445c804f7989ce4cee30_th.JPG",
            name: "酱油水小鲍鱼",
            detail: "调经润燥，增加食欲，解热镇痛，帮助消化",
            price: "118"
          },
          {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110091882&di=e6ad503df62be7c2811fba8c859c187e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170516%2Fd489fbcdcb4c49f39ba14bac53a10cc9_th.jpg",
            name: "爆炒花蛤",
            detail: "",
            price: "28"
          },
          {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110362085&di=7167275e3f2244e60fe40682139f33ad&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_10%2Fa6q07o0708014431307.jpg",
            name: "煎蟹",
            detail: "",
            price: "58"
            }, {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110245592&di=7020398570b85fc9d20923c526b605de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F8af41625801e445c804f7989ce4cee30_th.JPG",
              name: "酱油水小鲍鱼",
              detail: "调经润燥，增加食欲，解热镇痛，帮助消化",
              price: "118"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110091882&di=e6ad503df62be7c2811fba8c859c187e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170516%2Fd489fbcdcb4c49f39ba14bac53a10cc9_th.jpg",
              name: "爆炒花蛤",
              detail: "",
              price: "28"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110362085&di=7167275e3f2244e60fe40682139f33ad&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_10%2Fa6q07o0708014431307.jpg",
              name: "煎蟹",
              detail: "",
              price: "58"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110245592&di=7020398570b85fc9d20923c526b605de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F8af41625801e445c804f7989ce4cee30_th.JPG",
              name: "酱油水小鲍鱼",
              detail: "调经润燥，增加食欲，解热镇痛，帮助消化",
              price: "118"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110091882&di=e6ad503df62be7c2811fba8c859c187e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170516%2Fd489fbcdcb4c49f39ba14bac53a10cc9_th.jpg",
              name: "爆炒花蛤",
              detail: "",
              price: "28"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110362085&di=7167275e3f2244e60fe40682139f33ad&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_10%2Fa6q07o0708014431307.jpg",
              name: "煎蟹",
              detail: "",
              price: "58"
            }
        ]
      },
      {
        current: "1",
        list:
          [
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110245592&di=7020398570b85fc9d20923c526b605de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F8af41625801e445c804f7989ce4cee30_th.JPG",
              name: "酱油水小鲍鱼",
              detail: "调经润燥，增加食欲，解热镇痛，帮助消化",
              price: "118"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110091882&di=e6ad503df62be7c2811fba8c859c187e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170516%2Fd489fbcdcb4c49f39ba14bac53a10cc9_th.jpg",
              name: "爆炒花蛤",
              detail: "",
              price: "28"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110362085&di=7167275e3f2244e60fe40682139f33ad&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_10%2Fa6q07o0708014431307.jpg",
              name: "煎蟹",
              detail: "",
              price: "58"
            }
          ]
      },
      {
        current: "2",
        list:
          [
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110245592&di=7020398570b85fc9d20923c526b605de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F8af41625801e445c804f7989ce4cee30_th.JPG",
              name: "酱油水小鲍鱼",
              detail: "调经润燥，增加食欲，解热镇痛，帮助消化",
              price: "118"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110091882&di=e6ad503df62be7c2811fba8c859c187e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170516%2Fd489fbcdcb4c49f39ba14bac53a10cc9_th.jpg",
              name: "爆炒花蛤",
              detail: "",
              price: "28"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110362085&di=7167275e3f2244e60fe40682139f33ad&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_10%2Fa6q07o0708014431307.jpg",
              name: "煎蟹",
              detail: "",
              price: "58"
            }
          ]
      },
      {
        current: "3",
        list:
          [
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110245592&di=7020398570b85fc9d20923c526b605de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F8af41625801e445c804f7989ce4cee30_th.JPG",
              name: "酱油水小鲍鱼",
              detail: "调经润燥，增加食欲，解热镇痛，帮助消化",
              price: "118"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110091882&di=e6ad503df62be7c2811fba8c859c187e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170516%2Fd489fbcdcb4c49f39ba14bac53a10cc9_th.jpg",
              name: "爆炒花蛤",
              detail: "",
              price: "28"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110362085&di=7167275e3f2244e60fe40682139f33ad&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_10%2Fa6q07o0708014431307.jpg",
              name: "煎蟹",
              detail: "",
              price: "58"
            }
          ]
      },
      {
        current: "4",
        list:
          [
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110245592&di=7020398570b85fc9d20923c526b605de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F8af41625801e445c804f7989ce4cee30_th.JPG",
              name: "酱油水小鲍鱼",
              detail: "调经润燥，增加食欲，解热镇痛，帮助消化",
              price: "118"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110091882&di=e6ad503df62be7c2811fba8c859c187e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170516%2Fd489fbcdcb4c49f39ba14bac53a10cc9_th.jpg",
              name: "爆炒花蛤",
              detail: "",
              price: "28"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110362085&di=7167275e3f2244e60fe40682139f33ad&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_10%2Fa6q07o0708014431307.jpg",
              name: "煎蟹",
              detail: "",
              price: "58"
            }
          ]
      },
      {
        current: "5",
        list:
          [
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110245592&di=7020398570b85fc9d20923c526b605de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F8af41625801e445c804f7989ce4cee30_th.JPG",
              name: "酱油水小鲍鱼",
              detail: "调经润燥，增加食欲，解热镇痛，帮助消化",
              price: "118"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110091882&di=e6ad503df62be7c2811fba8c859c187e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170516%2Fd489fbcdcb4c49f39ba14bac53a10cc9_th.jpg",
              name: "爆炒花蛤",
              detail: "",
              price: "28"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110362085&di=7167275e3f2244e60fe40682139f33ad&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_10%2Fa6q07o0708014431307.jpg",
              name: "煎蟹",
              detail: "",
              price: "58"
            }
          ]
      },
      {
        current: "6",
        list:
          [
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110245592&di=7020398570b85fc9d20923c526b605de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F8af41625801e445c804f7989ce4cee30_th.JPG",
              name: "酱油水小鲍鱼",
              detail: "调经润燥，增加食欲，解热镇痛，帮助消化",
              price: "118"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110091882&di=e6ad503df62be7c2811fba8c859c187e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170516%2Fd489fbcdcb4c49f39ba14bac53a10cc9_th.jpg",
              name: "爆炒花蛤",
              detail: "",
              price: "28"
            },
            {
              img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110362085&di=7167275e3f2244e60fe40682139f33ad&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_10%2Fa6q07o0708014431307.jpg",
              name: "煎蟹",
              detail: "",
              price: "58"
            }
          ]
      }
      
    ]
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  imgsee: function (e) {
    var src = e.currentTarget.dataset.src;
    console.log(src);
    var imgArr = [src];
    wx.previewImage({
      current: src,
      urls: imgArr,
      success: function (res) { console.log(res); },
      fail: function (res) { console.log(2); },
      complete: function (res) { console.log(3); },
    })
  },
  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  footerTap: app.footerTap
})
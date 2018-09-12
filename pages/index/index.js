var app = getApp()
Page({
  data: {
    movies: [
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535101564599&di=570c6b4822bc182b2d7ea16f51cf874d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013eca59958d78a80121560394a04b.jpg' },
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535101857434&di=53f21788d8210860a45ba7cccb5d6ae4&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150605%2F0020033662313532_b.jpg' },
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535101592821&di=b913bda810f9d825e50718b00883bff1&imgtype=0&src=http%3A%2F%2Fpic139.nipic.com%2Ffile%2F20170827%2F15129002_165522921039_2.jpg' },
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535101953660&di=bce04145a7497db24f6616423beb1594&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0132f458fdb14ea8012160f796c12d.jpg%402o.jpg' }
    ],
    navigation:[
      {
        icon:"../../images/more.png",
        bgcolor:"yellow",
        titles:"美食",
        url:"../product/product"
      },
      {
        icon: "../../images/we.png",
        bgcolor: "green",
        titles: "小渔人",
        url: "../introduce/introduce"
      }
    ],
    program:[
      {
        titlepic:"../../images/new.png",
        titleword:"最新菜品",
        posterurl:"../../images/newfood.png",
        newfoods:[
                    {
                      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110091882&di=e6ad503df62be7c2811fba8c859c187e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170516%2Fd489fbcdcb4c49f39ba14bac53a10cc9_th.jpg",
                      name: "爆炒花蛤",
                      price: "28"
                    },
                    {
                      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110245592&di=7020398570b85fc9d20923c526b605de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F8af41625801e445c804f7989ce4cee30_th.JPG",
                      name: "酱油水小鲍鱼",
                      price: "118"
                    },
                    {
                      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535110362085&di=7167275e3f2244e60fe40682139f33ad&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_10%2Fa6q07o0708014431307.jpg",
                      name: "煎蟹",
                      price: "68"
                    }
                  ]
      },
      {
        titlepic: "../../images/recommend.png",
        titleword: "招牌推荐",
        posterurl: "../../images/newport.jpg",
        newfoods:[
                      {
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535360168643&di=1f9636837d5f4f39719c4c02f7341573&imgtype=0&src=http%3A%2F%2Fs3.cdn.xiangha.com%2Fcaipu%2F201609%2F0918%2F091842184899.jpg%2FNjAwX3J3MTcwN19jXzEtM19yYjEwMjdfcmJfMS04XzQwMA",
            name: "蒜蓉烤生蚝",
                        price: "36"
                      },
                      {
                        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535364431069&di=22866129b60c8945c70e9bc89ccc34c2&imgtype=0&src=http%3A%2F%2Fpic13.qiyeku.com%2Fqiyeku_pic%2F2015%2F2%2F3%2Fdjklf%2Fproduct%2Fproduct_pic%2Fimage%2F2015_02_04%2F20150204092556298.jpg",
                        name: "白灼竹节虾",
                    price: "48"
                      },
                      {
                        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535364544671&di=c335b807d05cde893c75fdb755944c77&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150309%2Fmp5292049_1425879607482_1_th.jpeg",
                        name: "海蛎煎",
                    price: "28"
                      }
                    ]
        }
              ],
  },
  onLoad: function () {
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  imgsee: function (e) {
    var src = e.currentTarget.dataset.src;
    console.log(src);
    var imgArr = [src];
    wx.previewImage({
      current:src,
      urls: imgArr,
      success: function (res) { console.log(res); },
      fail: function (res) { console.log(2); },
      complete: function (res) { console.log(3); },
    })
  },
  click: function(url) {
    wx.switchTab({
      url:url
    })
  },
}) 

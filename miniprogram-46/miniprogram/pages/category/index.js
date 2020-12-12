// pages/stock/stock_main.js
Page({
 
  /* 页面的初始数据 */
  data: {
  curNav:1
  },
  article_01: function(e){
    wx.navigateTo({
      url: '/pages/article_01/index'
    })
  },
  article_02: function(e){
    wx.navigateTo({
      url: '/pages/article_02/index'
    })
  },
  article_03: function(e){
    wx.navigateTo({
      url: '/pages/article_03/index'
    })
  },
  article_04: function(e){
    wx.navigateTo({
      url: '/pages/article_04/index'
    })
  },
  article_05: function(e){
    wx.navigateTo({
      url: '/pages/article_05/index'
    })
  },
  sentence_01: function(e){
    wx.navigateTo({
      url: '/pages/sentence_01/index'
    })
  },
  sentence_02: function(e){
    wx.navigateTo({
      url: '/pages/sentence_02/index'
    })
  },
  sentence_03: function(e){
    wx.navigateTo({
      url: '/pages/sentence_03/index'
    })
  },
  sentence_04: function(e){
    wx.navigateTo({
      url: '/pages/sentence_04/index'
    })
  },
  sentence_05: function(e){
    wx.navigateTo({
      url: '/pages/sentence_05/index'
    })
  },

  people_01: function(e){
    wx.navigateTo({
      url: '/pages/people_01/index'
    })
  },
  people_02: function(e){
    wx.navigateTo({
      url: '/pages/people_02/index'
    })
  },
  people_03: function(e){
    wx.navigateTo({
      url: '/pages/people_03/index'
    })
  },
  people_04: function(e){
    wx.navigateTo({
      url: '/pages/people_04/index'
    })
  },

  saying_01: function(e){
    wx.navigateTo({
      url: '/pages/saying_01/index'
    })
  },
  saying_02: function(e){
    wx.navigateTo({
      url: '/pages/saying_02/index'
    })
  },
 saying_03: function(e){
    wx.navigateTo({
      url: '/pages/saying_03/index'
    })
  },
  saying_04: function(e){
    wx.navigateTo({
      url: '/pages/saying_04/index'
    })
  },
  /* 把点击到的某一项 设为当前curNav */
  switchRightTab:function(e){
  let id = e.target.dataset.id;
  console.log(id);
  this.setData({
  curNav: id
  })
  }
 })
 
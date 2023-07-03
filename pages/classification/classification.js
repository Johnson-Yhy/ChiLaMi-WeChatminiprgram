// const { VertexBuffer } = require("XrFrame/kanata/lib/index");

// pages/flowing/flowing.js
// const app=getApp();
// const prouduct=app.globalData.product;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    prouduct:[],
    product:[],
    list:[],
    date:"烧烤"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 数据分类
  onLoad(options) {
    wx.request({
      url: 'https://mock.mengxuegu.com/mock/6473238d9d552b3b3b17d758/proudct/proudct',
      success:res=>{
        console.log(res.data);
        var prouductinfo=res.data.data.product
        console.log("11",prouductinfo)
        var new_productinfo={}
        let list=[];
        for(let i in prouductinfo)
        {
          let title=prouductinfo[i].title
          if(new_productinfo[title]== undefined){
          new_productinfo[title] = [prouductinfo[i]]
      }
        else {
          new_productinfo[title].push(prouductinfo[i])
      }
    }
        this.setData({
          product:new_productinfo,
        })
        var b=1;
        for(var i=0;i<=b;i++)
        {
          list.push(prouductinfo[i])
        }
        this.setData({
          list:list
        })
      }
    })


    
    // console.log(new_productinfo)

  },
  click:function(options)
  {
    wx.request({
      url: 'https://mock.mengxuegu.com/mock/6473238d9d552b3b3b17d758/proudct/proudct',
      success:res=>{
        var that=this;
    var data = options.target.dataset.index;
    console.log(data);
    let bianlian=res.data.data.product;
    let prouductlengths=bianlian.length;
    let list=[];
    for(var i=0;i<prouductlengths;i++)
    {
      let title=bianlian[i].title
      if(options.target.dataset.index==title)
      list.push(bianlian[i])
    }
    that.setData({
      list:list,
      date:data
    })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
// const app=getApp();
// const prouduct=app.globalData.product;
// var productData=require('../../utils/data.js');
// console.log(productData);
Page({
  /**
   * 页面的初始数据
   */
  data: {
    prouduct:[],
    list:[],
    caidan:[],
    jilu:5
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.request({
      url: 'https://mock.mengxuegu.com/mock/6473238d9d552b3b3b17d758/proudct/proudct',
      success:res=>{
        console.log(res.data);
        let bianlian=res.data.data.product
        let prouductlengths=bianlian.length
        let list=[];
        let caidan=[];
        for(var i=0;i<4;i++){
          let random=bianlian[Math.floor(Math.random()*prouductlengths)];
          list.push(random);
        }
        for(var j=0;j<4;j++)
        {
          let random=bianlian[Math.floor(Math.random()*prouductlengths)];
          caidan.push(random);
        }
            this.setData({
              prouduct:res.data.data.product,
              list:list,
              caidan:caidan
            })
          }
    })
    // console.log(caidan)
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
    // console.log(app.globalData.product);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that=this
    // console.log(this.data.prouduct)
    let bianlian=that.data.prouduct
    let prouductlengths=bianlian.length
    let list=[];
    let caidan=[];
    for(var i=0;i<4;i++){
      let random=bianlian[Math.floor(Math.random()*prouductlengths)];
      list.push(random);
    }
    that.setData({
      list:list
    });
    // console.log(list)
    for(var j=0;j<4;j++)
    {
      let random=bianlian[Math.floor(Math.random()*prouductlengths)];
      caidan.push(random);
    }
    that.setData({
      caidan:caidan
    });
    console.log(caidan)
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉加载")
    var that=this
    let bianlian=that.data.prouduct
    let prouductlengths=bianlian.length
    let lebiao=[];
    for(var j=0;j<this.data.jilu;j++)
    {
      lebiao.push(bianlian[j])
    }
    that.setData({
      lebiao:lebiao,
      jilu:this.data.jilu+5
    });
    if(this.data.jilu=prouductlengths)
    {
      wx.stopPullDownRefresh()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
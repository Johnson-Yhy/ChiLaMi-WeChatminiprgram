// pages/vedio/vedio.js
const app=getApp();
const prouduct=app.globalData.product;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    list:[],
    title:'',
    name:'',
    image1:'',
    telephone:'',
    address:'',
    business:'',
    isClick:'',
    prouduct:app.globalData.product,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow:function() {
    var that=this;
    this.isShow=true;
    wx.onAccelerometerChange(function(e) {
      if(!that.isShow){
        return
      }

      if(e.x>1&&e.y>1)
      {
        wx.showToast({
          title: '摇的真棒',
          icon:'success',
          duration:1000
        })
        let bianlian=that.data.prouduct
        let prouductlengths=bianlian.length
        let list=[];
        let random=bianlian[Math.floor(Math.random()*prouductlengths)];
        list.push(random);
        that.setData({
          list:list
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide:function() {
      this.isShow=false;
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
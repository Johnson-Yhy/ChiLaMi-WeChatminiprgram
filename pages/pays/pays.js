// pages/collect/collect.js
const app=getApp();
const prouduct=app.globalData.product;
// console.log("shucu"+app.globalData.product[3].isClick);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prouduct:app.globalData.product,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() 
  {
    var that=this;
    let bianlian=that.data.prouduct;
    let prouductlengths=bianlian.length;
    let list=[];
    let index=1;
    for(var i=0;i<prouductlengths;i++)
    {
      let pays=bianlian[i].pays
      if(index==pays)
      list.push(bianlian[i])
    }
    that.setData({
      list:list
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
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    avatarUrl:defaultAvatarUrl,
    nickName:"",
    hiddenmodalput: true,
    isShow:true,
  },
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  confirm:function(){
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput,
      isShow:!this.data.isShow
    })
  },
  
  tuichu:function()
  {
    var that=this
    if(this.data.nickName)
    {
      this.setData({
        isShow:!this.data.isShow,
        avatarUrl:defaultAvatarUrl,
        nickName:"",
      })
    }
  },
  onChooseAvatar:function(res)
  {
    var that=this;
    console.log(res)
    this.setData({
      avatarUrl:res.detail.avatarUrl

    })
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

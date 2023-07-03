Page({
  data: {
    hiddenmodalput: true,
    title:'',
    name:'',
    image1:'',
    telephone:'',
    address:'',
    business:'',
    isClick:'',
    index:'',
    buys:'',
    pays:'',
    longitude:'',
    latitude:'',
  },
  click:function(){
    var that=this
    var id=this.data.index
    this.setData({
      isClick: [this.data.isClick + 1]%2,
      }
      
    )
    console.log("1",this.data.isClick);
    wx.request({
      url: 'https://mock.mengxuegu.com/mock/6473238d9d552b3b3b17d758/proudct/proudct',
      method:"GET",
      data:{
        name: this.data.name,
        isClick: this.data.isClick,
      },
      success:function(res){
        console.log(res);
      }
    })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log('url传递的参数',options)
    var id = options.itemid
    // this.setData({
    //   name:this.data.prouduct[id-1].name,
    //   image1:this.data.prouduct[id-1].image1,
    //   telephone:this.data.prouduct[id-1].telephone,
    //   address:this.data.prouduct[id-1].address,
    //   business:this.data.prouduct[id-1].business,
    //   isClick:this.data.prouduct[id-1].isClick,
    //   list:this.data.prouduct[id-1].tuijian,
    //   huan:this.data.prouduct[id-1].huanjing,
    //   longitude:this.data.prouduct[id-1].longitude,
    //   latitude:this.data.prouduct[id-1].latitude,
    //   buys:this.data.prouduct[id-1].buys,
    //   pays:this.data.prouduct[id-1].pays,
    //   index:id,
    // })
    wx.request({
      url: 'https://mock.mengxuegu.com/mock/6473238d9d552b3b3b17d758/proudct/proudct',
      success:res=>{
        console.log(res.data.data.product[id-1].name)
        this.setData({
          name:res.data.data.product[id-1].name,
          image1:res.data.data.product[id-1].image1,
          telephone:res.data.data.product[id-1].telephone,
          address:res.data.data.product[id-1].address,
          business:res.data.data.product[id-1].business,
          isClick:res.data.data.product[id-1].isClick,
          list:res.data.data.product[id-1].tuijian,
          huan:res.data.data.product[id-1].huanjing,
          longitude:res.data.data.product[id-1].longitude,
          latitude:res.data.data.product[id-1].latitude,
          buys:res.data.data.product[id-1].buys,
          pays:res.data.data.product[id-1].pays,
          index:id,
        })
      }
    })
    // console.log('miaoshu',id)
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
  call:function(){
    var that=this
    console.log(this.data.telephone);
    wx.makePhoneCall({
      phoneNumber: this.data.telephone
    })
  },
  location:function(){
    var that=this
    console.log("chengs");
    wx.openLocation({
      latitude:this.data.latitude,
      longitude: this.data.longitude,
      scale:16,
      name:this.data.name,
      address:this.data.address,
    })
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
  //收藏
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  modalinput: function () {
    var that=this
    var id=this.data.index
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput,
      buys:1
    })
  },
  confirm:function(){
    var that=this
    var id=this.data.index
    this.setData({
      hiddenmodalput:!this.data.hiddenmodalput,
      pays:1,
      buys:0
    })
  }
})
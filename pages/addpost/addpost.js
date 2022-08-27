// pages/addpost/addpost.js
Page({

  /**
   * 页面的初始数据
   */
  "data": {
    "title": "",
    "content": "",
    "username": "",
    "communityid":"",
    "userid":"",
  },
  addPost(options) {
    var that = this
    wx.request({
      url: 'http://localhost:8080/invitation/insert',
      method: 'POST',
      data: {
        "title": that.data.title,
        "content": that.data.content,
        "communityId":that.data.communityid,
        "userId":that.data.userid
      },
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success: function (res) {
        // console.log(res)
      }

    })
    wx.navigateBack({
      delta: 1
    })
  },

  titleInput(options) {
    this.setData({
      "title": options.detail.value
    })
    // console.log(this.data.title)
  },
  contentInput(options) {
    this.setData({
      "content": options.detail.value
    })
    // console.log(this.data.content)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var app = getApp();
    this.setData({
      "username": app.globalData.username
    })
    var communityid = options.id
    // console.log(options.id)
    this.setData({
      "communityid":communityid
    })
    // console.log(this.data.communityid)
    var that = this
    wx.request({
      url: 'http://localhost:8080/user/getIdByName/'+this.data.username,
      success:function (res) {
        // console.log(res)
        that.setData({
          "userid":res.data.data
        })
        // console.log(that.data.userid)
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
// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    "data": {
        "navState": 0,//导航状态
        "username": "",
        "userinfo": [],
        "userpost":[],
        "userComment":[]
    },
    bindchange(e) {
        // console.log(e.detail.current)
        let index = e.detail.current;
        this.setData({
            navState: index
        })
    },
    //点击导航
    navSwitch: function (e) {
        // console.log(e.currentTarget.dataset.index)
        let index = e.currentTarget.dataset.index;
        this.setData({
            navState: index
        })
    },
    toLogin(options) {
        wx.navigateTo({
            url: '/pages/login/login',
        })
    },
    //跳转
    toUserPost(options) {
        wx.navigateTo({
            url: '/pages/userpost/userpost',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var app = getApp();
        this.setData({
            "username": app.globalData.username
        })
        // console.log(this.data.username)
        var that = this
        wx.request({
            url: 'http://localhost:8080/user/getByName/' + this.data.username,
            success: function (res) {
                // console.log(res.data.data)
                that.setData({
                    "userinfo": res.data.data
                })
                // console.log(that.data.userinfo)
            }
        }),
        wx.request({
            url: 'http://localhost:8080/invitation/userName/'+this.data.username,
            success: function (res) {
                // console.log(res.data.data)
                that.setData({
                    "userpost": res.data.data
                })
                // console.log(that.data.userinfo)
            }
        }),
        wx.request({
          url: 'http://localhost:8080/comment/userName/'+this.data.username,
          success: function (res) {
              // console.log(res.data.data)
              that.setData({
                  "userComment": res.data.data
              })
              // console.log(that.data.userinfo)
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
// pages/comment/comment.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "content": "",
        "username": "",
        "userid": "",
        "invitationid": "",
    },

    commentInput(options) {
        this.setData({
            "content": options.detail.value
        })
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
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var id = options.id
        // console.log(id)
        this.setData({
            "invitationid":options.id
        })
        var app = getApp();
        this.setData({
            "username": app.globalData.username
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
    toUserPost(options) {
        var that = this
        wx.request({
            url: 'http://localhost:8080/comment/insert',
            method: 'POST',
            data: {
                "content": that.data.content,
                "userId": that.data.userid,
                "invitationId": that.data.invitationid,
            },
            header: { "Content-Type": "application/x-www-form-urlencoded" },
            success: function (res) {
                // console.log(res)
            }

        })

        //返回上级页面
        wx.navigateBack({
            delta: 1
        })
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
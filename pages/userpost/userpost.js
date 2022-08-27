// pages/userpost/userpost.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "invitation":[],
        "comment":[],
    },
    toComment(options){
        var id = options.currentTarget.dataset.id
        wx.navigateTo({
          url: '/pages/comment/comment?id='+id,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var id = options.id
        var that = this;
        wx.request({
            url: 'http://localhost:8080/invitation/' + id,
            success: function (res) {
                // console.log(res)
                that.setData({
                    "invitation": res.data.data
                })
            }
        }),
        wx.request({
            url: 'http://localhost:8080/comment/InviId/' + id,
            success: function (res) {
                // console.log(res)
                that.setData({
                    "comment": res.data.data
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
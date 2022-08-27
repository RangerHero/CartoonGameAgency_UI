// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    "data": {
        "hotinvi": [],
        "conter": [],
        "hotpost": [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this
        wx.request({
            url: 'http://localhost:8080/community/max',
            success: function (res) {
                // console.log(res.data.data)
                that.setData({
                    "hotinvi": res.data.data
                })
            }
        }),
            wx.request({
                url: 'http://localhost:8080/classify/getAllClassify',
                success: function (res) {
                    // console.log(res.data.data)
                    that.setData({
                        "conter": res.data.data
                    })
                }
            }),
            wx.request({
                url: 'http://localhost:8080/invitation/getHotInvi',
                success: function (res) {
                    // console.log(res.data.data)
                    that.setData({
                        "hotpost": res.data.data
                    })
                }
            })
    },
    toCommunity(options) {
        var id = options.currentTarget.dataset.id
        // console.log(id)
        wx.navigateTo({
            url: '/pages/communitydata/communitydata?id=' + id,
        })
    },
    toUserPost(options) {
        var id = options.currentTarget.dataset.id
        wx.navigateTo({
            url: '/pages/userpost/userpost?id='+id,
        })
    },
    toClsaaify(options) {
        var id = options.currentTarget.dataset.id
        // console.log(id)
        wx.navigateTo({
            url: '/pages/classify/classify?id=' + id,
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
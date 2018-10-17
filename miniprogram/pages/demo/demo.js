// miniprogram/pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  queryCount: function() {
    console.log("query!")
    const db = wx.cloud.database()
    db.collection('todos').get().then(res => {
      console.info(res.data)
    })
  },
  addCount: function() {
    console.log("add!")
    const db = wx.cloud.database()
    db.collection('todos').add({
      data: {
        description: 'learn cloud database',
        due: new Date('2018-10-16'),
        tags: ['cloud', 'good'],
        location: new db.Geo.Point(113, 23),
        done: false
      },
      success: function(res) {
        console.log(res)
      }
    })
  },
  updateCount: function() {
    console.log('update')
    const db = wx.cloud.database()
    db.collection('todos').doc('W8VI7Z25dhqgM-rn').update({
      data: {
        style: db.command.set({
          color: 'blue'
        })
      },
      success: function(res) {
        console.log(res.stats)
      }
    })
  },
  deleteCount: function() {
    console.log('delete')
    const db = wx.cloud.database()
    db.collection('todos').doc('W8VI7Z25dhqgM-rn').remove({
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  uploadImg: function() {
    console.log('upload')
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        wx.showLoading({
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0]
        console.log('file path:' + filePath)

        const cloudPath = filePath.substring(filePath.lastIndexOf('.') - 7)
        console.log('file path:' + cloudPath)

        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res.fileID)
            wx.showToast({
              title: '文件上传成功',
            })
          },
          fail: e => {
            console.error('文件上传失败',e)
            wx.showToast({
              title: '文件上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })
      }
    })



  }


})
// utils/components/authorization.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    button: {
      type: String,
      value: '',
      observer: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    display: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    reject: function(res) {
      console.info('拒绝')
      this.setData({
        display: false
      })
    },
    confirm: function(res) {
      console.info('授权确认' + res)
      this.setData({
        display: false
      })
      wx.reLaunch({
        url: '../index/index',
      })
    }
  }
})
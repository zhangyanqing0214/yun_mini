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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    reject: function(res) {
      console.info('拒绝')
    },
    confirm: function(res) {
      console.info('授权确认' + res)
    }
  }
})
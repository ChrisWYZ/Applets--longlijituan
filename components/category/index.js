
Page({
  data: {
    //tabbar底部导航栏的事件
    active: 'sort',
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  //nav-bar的点击事件
  onClickLeft() {
    wx.showToast({ title: '成功', icon: 'success' });
  },
  onClickRight() {
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },
  //微信自带的路由跳转
  goHome(){
    wx.reLaunch({
      url:'../home/index'
    })
  }
  
  
});
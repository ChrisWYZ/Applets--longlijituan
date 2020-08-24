
Page({
  data: {
   
    //分类选择树
    mainActiveIndex: 0,
    activeId: null,
    //tabbar底部导航栏的事件
    active: 'myzone',
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  //nav-bar的点击事件(测试用)
  onClickLeft() {
    wx.showToast({ title: '成功', icon: 'success' });
  },
  onClickRight() {
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },
  //导航路由跳转
  goToMyhome(){
    wx.reLaunch({
      url:'../home/index'
    })
  },
  goToCategory(){
    wx.reLaunch({
      url:'../category/index'
    })
  },
  goToMyzone(){
    wx.reLaunch({
      url:'../myzone/index'
    })
  },
  goToShopping(){
    wx.reLaunch({
      url:'../shopping/index'
    })
  },
  goToLongliyuan(){
    wx.reLaunch({
      url:'../longliyuan/index'
    })
  },
  //分类选择的触摸事件
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({ activeId });
  },
  
  
});
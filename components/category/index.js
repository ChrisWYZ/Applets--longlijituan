
Page({
  data: {
    items:[
      {text:'商品栏1',disabled:false,children:[{text:'商品1',id:1,disabled:false},{text:'商品2',id:2,disabled:false}]},
      {text:'商品栏2',disabled:false,children:[{text:'商品3',id:3,disabled:false},{text:'商品4',id:4,disabled:false}]},
      {text:'商品栏3',disabled:false,children:[{text:'商品5',id:5,disabled:false},{text:'商品6',id:6,disabled:false}]},
      {text:'商品栏4',disabled:false,children:[{text:'商品7',id:7,disabled:false}]}

    ],
    //分类选择树
    mainActiveIndex: 0,
    activeId: null,
    //tabbar底部导航栏的事件
    active: 'sort',
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
Page({
  data: {
    hasAddress:false,
    address:{},
    cleargoods:[
      {
        img:"/images/allimg.jpg"
      },
      {
        img:"/images/allimg.jpg"
      },
      {
        img:"/images/allimg.jpg"
      },
      {
        img:"/images/allimg.jpg"
      },
      {
        img:"/images/allimg.jpg"
      }
    ],
  },
  onLoad() {
    this.setData({
      hasAddress:false,
      address:{
        name:"胡一天",
        phone:"13854545001",
        address:"北京市北京辖区东城区上海路12号"
      }
    })
  },
});
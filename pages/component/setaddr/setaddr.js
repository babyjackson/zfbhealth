Page({
  data: {
    dafault:0,
    address:[
      {
        addr:"江苏省南京市理工大学 2号宿舍楼1",
        name:"张某某",
        tel:"123459678890"
      },
      {
        addr:"江苏省南京市理工大学 2号宿舍楼2",
        name:"张某某",
        tel:"123459678890"
      },
      {
        addr:"江苏省南京市理工大学 2号宿舍楼3",
        name:"张某某",
        tel:"123459678890"
      },
      {
        addr:"江苏省南京市理工大学 2号宿舍楼4",
        name:"张某某",
        tel:"123459678890"
      }
    ]
  },
  onLoad() {},
  setdafault(e){
    let idx = e.currentTarget.dataset.index;
    this.setData({
      dafault:idx
    })
  },
  deleteaddr(e){
    let idx = e.currentTarget.dataset.index;
    console.log(idx)
    let address = this.data.address;
    address.splice(idx,1);
    this.setData({
      address:address
    })
  }
});

Page({
  data: {
    carts:[],
    selectAllStatus: "1",
    totalPrice: 0
  },
  onLoad(e){
    this.setData({
      carts:[
        {
          storetit:"阿玛尼",
          parentselect:"1",
          url:"",
          list:[
            {
              id: 1,
              imgsrc: "/images/allimg.jpg",
              num: 4,
              tit: "碧生源减肥茶 2.5g/袋*15袋/盒...",
              price: 158.00,
              select: "1"
            },
            {
              id: 2,
              imgsrc: "/images/allimg.jpg",
              num: 1,
              tit: "碧生源减肥茶 2.5g/袋*15袋/盒...",
              price: 158.00,
              select: "1"
            }
          ]
        },
        {
          storetit:"爱马仕",
          parentselect:"1",
          url:"",
          list:[
            {
              id: 1,
              imgsrc: "/images/allimg.jpg",
              num: 4,
              tit: "碧生源减肥茶 2.5g/袋*15袋/盒...",
              price: 158.00,
              select: "1"
            },
            {
              id: 2,
              imgsrc: "/images/allimg.jpg",
              num: 1,
              tit: "碧生源减肥茶 2.5g/袋*15袋/盒...",
              price: 158.00,
              select: "1"
            },
            {
              id: 2,
              imgsrc: "/images/allimg.jpg",
              num: 1,
              tit: "碧生源减肥茶 2.5g/袋*15袋/盒...",
              price: 158.00,
              select: "1"
            }
          ]
        }
      ]
    });
    this.getTotalPrice(e)
  },
  /***总计价格**/
  getTotalPrice(e){
    // 获取购物车列表
    let carts = this.data.carts;
    let total = 0;
    for(let i = 0;i<carts.length;i++){
      let list = carts[i].list;
      for(let j= 0;j<list.length;j++){
          let select = parseInt(list[j].select);
          //console.log(select)
          if(select == 1){
            total += list[j].num * list[j].price;
          }
      }
    }
    this.setData({
      totalPrice:total.toFixed(2)
    })
  },
  /**选择事件**/
  selectList(e){
    const {index,parentindex} = e.target.dataset;
    let carts = this.data.carts;
    let list = carts[parentindex].list;
    let selectAllStatus = this.data.selectAllStatus;
    let selected = parseInt(list[index].select);
    // console.log(selected)
    list[index].select = selected == 1 ? 0:1;
    let truepush = [];
    for(let j=0;j<list.length;j++){
      let arrtrue = parseInt(list[j].select);
      if(arrtrue == 1){
          truepush.push(arrtrue);
      }
    }
    if(list.length === truepush.length){
      carts[parentindex].parentselect = 1;
      console.log(true)
    }
    if(list[index].select == 0){
       carts[parentindex].parentselect = 0;
       this.setData({
         selectAllStatus:0 
       })
    }
    let parenttruepush = [];
    for(let j=0;j<carts.length;j++){
      let parrture = parseInt(carts[j].parentselect);
      if(parrture == 1){
        parenttruepush.push(parrture); 
      }
    }
     console.log(parenttruepush)
    if(carts.length === parenttruepush.length){
      this.setData({
         selectAllStatus:1 
       })
    }
    this.setData({
      carts:carts
    });
    this.getTotalPrice(e);
  },
  /** 全选事件 **/
  selectAll(e){
    let selectAll= this.data.selectAllStatus;
    let selectAllStatused = parseInt(selectAll);
    selectAll = selectAllStatused == 1 ? 0:1;
    let carts = this.data.carts;
    for(let i = 0;i<carts.length;i++){
      let list = carts[i].list;
      carts[i].parentselect = selectAll;
      for(let j =0;j<list.length;j++){
        list[j].select = selectAll;
      }
    }
    this.setData({
      selectAllStatus:selectAll,
      carts:carts
    });
    // console.log(carts)
    this.getTotalPrice(e);
  },
  // 店铺全选
  storeselect(e){
    const parentindex = e.target.dataset.parentindex;
   // console.log(parentindex)
   let carts = this.data.carts;
   let parentselected = parseInt(carts[parentindex].parentselect);
   carts[parentindex].parentselect = parentselected == 1 ? 0:1;
   // console.log(parentselected)
   let list = carts[parentindex].list;
   for(let i = 0;i<list.length;i++){
     list[i].select = carts[parentindex].parentselect;
   }
   let ptruearr = [];
   for(let j = 0;j<carts.length;j++){
     let parenttrue = parseInt(carts[j].parentselect);
     if(parenttrue == 1){
       ptruearr.push(parenttrue); 
     }
   }
   if(carts[parentindex].parentselect == 0){
     this.setData({
         selectAllStatus:0
      })
   }
   if(ptruearr.length === carts.length){
     this.setData({
         selectAllStatus:1 
      })
   }
   this.setData({
     carts:carts
   });
   // console.log(this.data.carts)
   this.getTotalPrice(e);
  },
  /**数量++***/
  addCount(e){
    const {parentindex,index} = e.target.dataset;
    let carts  = this.data.carts;
    let list = carts[parentindex].list;
    let num = list[index].num;
    list[index].select = 1;
    num +=1;
    list[index].num = num;
    this.setData({
      carts:carts
    });
    this.getTotalPrice(e);
  },
  /**数量--**/
  minusCount(e){
    let that = this;
    const {index,parentindex} = e.target.dataset;
    let carts = that.data.carts;
    let list = carts[parentindex].list;
    let num = list[index].num;
    if (num <= 1) {
      return false;
    }else{
      list[index].select = 1;
      num -=1;
      list[index].num = num;
      that.setData({
        carts:carts
      });
      that.getTotalPrice(e);
    }
  },
  /***删除商品***/
  deleteList(e){
    const {parentindex,index} = e.target.dataset;
    let that = this;
    let carts = that.data.carts;
    let list = carts[parentindex].list;
    let selected = list[index].select;
    if(selected == 0){
      my.showToast({
        type: 'none',
        content: '您还没有选择商品哦',
        duration: 2000,
        success: () => {
        },
      });
    }else{
      my.confirm({
        title: '',
        content: '确认要删除此商品吗？',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        success: (result) => {
          list.splice(index,1);
          if(carts.length >0){
            if(list.length <= 0){
              carts.splice(parentindex,1)
            }else{
              that.getTotalPrice(e);
            }
          }
          that.setData({
            carts:carts
          });
        },
      });
    }
  }
});

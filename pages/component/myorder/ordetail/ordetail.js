Page({
  data: {
    status:{
      cur:0
    },
    orgoods:{
      goods:[
        {
          img:"/images/allimg.jpg",
          tit:"秋装新款女装秋装新款女装秋装新款女装秋装新款女装秋装新款女装秋装新款女装秋装新款女装秋装新款女装",
          ypri:"34.66",
          xpri:"39.66",
          num:1
        }
      ]
    },
    recom:[
      {
        imgsrc:"/images/allimg.jpg",
        url:"",
        tit:"瑞典进口ICA麦片50%水果坚果燕麦片",
        price:"8.80"
      },
      {
        imgsrc:"/images/allimg.jpg",
        url:"",
        tit:"瑞典进口ICA麦片50%水果坚果燕麦片",
        price:"8.80"
      },
      {
        imgsrc:"/images/allimg.jpg",
        url:"",
        tit:"瑞典进口ICA麦片50%水果坚果燕麦片",
        price:"8.80"
      },
      {
        imgsrc:"/images/allimg.jpg",
        url:"",
        tit:"瑞典进口ICA麦片50%水果坚果燕麦片",
        price:"8.80"
      },
      {
        imgsrc:"/images/allimg.jpg",
        url:"",
        tit:"瑞典进口ICA麦片50%水果坚果燕麦片",
        price:"8.80"
      },
      {
        imgsrc:"/images/allimg.jpg",
        url:"",
        tit:"瑞典进口ICA麦片50%水果坚果燕麦片",
        price:"8.80"
      },
      {
        imgsrc:"/images/allimg.jpg",
        url:"",
        tit:"瑞典进口ICA麦片50%水果坚果燕麦片",
        price:"8.80"
      },
      {
        imgsrc:"/images/allimg.jpg",
        url:"",
        tit:"瑞典进口ICA麦片50%水果坚果燕麦片",
        price:"8.80"
      }
    ]
  },
  onLoad(e) {
    let idx = parseInt(e.id);
    let status = this.data.status;
    // console.log(this.status)
    status.cur = idx;
    
    this.setData({
      status:status
    })
  },
});

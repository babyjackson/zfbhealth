Page({
  data: {
    banner:[
      {
        imgsrc:"/images/banner1.jpg"
      },
      {
        imgsrc:"/images/banner1.jpg"
      },
      {
        imgsrc:"/images/banner1.jpg"
      }
    ],
    grade:[
      {
        tit:"实物外观",
        num:"5"
      },
      {
        tit:"商品质量",
        num:"5"
      },
      {
        tit:"服务质量",
        num:"5"
      },
      {
        tit:"配送效率",
        num:"5"
      }
    ],
    tabArr:{cur:0},
    imageText:["/images/imageText1.jpg","/images/imageText1.jpg","/images/imageText1.jpg","/images/imageText1.jpg"],
    reviews:[
      {
        portrait:"/images/allimg.jpg",
        name:"13544868****186",
        plcon:"好吃，就是太小了，快递小哥哥居然没给我带数字蜡烛，他说回去取，看天气太热，好吃，就是太小了，快递小哥哥居然没给我带数字蜡烛，他说回去取，看天气太热",
        pic:["/images/allimg.jpg","/images/allimg.jpg","/images/allimg.jpg"],
        time:"2017-07-04 10:27:37"
      },
      {
        portrait:"/images/allimg.jpg",
        name:"13544868****186",
        plcon:"好吃，就是太小了，快递小哥哥居然没给我带数字蜡烛，他说回去取，看天气太热，好吃，就是太小了，快递小哥哥居然没给我带数字蜡烛，他说回去取，看天气太热",
        pic:["/images/allimg.jpg","/images/allimg.jpg","/images/allimg.jpg"],
        time:"2017-07-04 10:27:37"
      },
      {
        portrait:"/images/allimg.jpg",
        name:"13544868****186",
        plcon:"好吃，就是太小了，看天气太热",
        time:"2017-07-04 10:27:37"
      }
    ],
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
      }
    ]
  },
  onLoad() {},
  /**切换** */
  onTagChange(e){
    let inx = e.target.dataset.index;
    console.log(inx);
    this.setData({
      "tabArr.cur":inx
    })
  }
});
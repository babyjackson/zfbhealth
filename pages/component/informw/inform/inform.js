import footer from '/util/footer/index.js'
Page({
  
  data: {
    select:false,
    tabArr:{
        cur:0
      },
      inform:[
      {
        tit:"注意了！这个季节打喷嚏流鼻涕，可能不是感冒！",
        ys:"养生常识",
        zan:"120",
        date:"11月12日",
        url:"/pages/component/informw/detail/detail",
        imgsrc:"/images/allimg1.jpg"
      },
      {
        tit:"注意了！这个季节打喷嚏流鼻涕，可能不是感冒！",
        ys:"养生常识",
        zan:"120",
        date:"11月12日",
        url:"",
        imgsrc:"/images/allimg1.jpg"
      },
      {
        tit:"注意了！这个季节打喷嚏流鼻涕，可能不是感冒！",
        ys:"养生常识",
        zan:"120",
        date:"11月12日",
        url:"",
        imgsrc:"/images/allimg1.jpg"
      },
      {
        tit:"注意了！这个季节打喷嚏流鼻涕，可能不是感冒！",
        ys:"养生常识",
        zan:"120",
        date:"11月12日",
        url:"",
        imgsrc:"/images/allimg1.jpg"
      }
    ],
  },
    onTagChange(e) {
       let index = parseInt(e.target.dataset.index);
       this.setData({
          'tabArr.cur':index
        })
        
      },
  onLoad(e) {
  
  },
   /****上拉 */
   onReachBottom(e){
     console.log("到底部了")
   }
});

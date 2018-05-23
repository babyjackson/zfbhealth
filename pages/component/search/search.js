Page({
  data: {
    pastsearch:[
      {
        value:"外套"
      },
      {
        value: "长袖体恤男中年"
      },
      {
        value: "体恤男中年"
      },
      {
        value: "体恤男"
      },
      {
        value: "体恤女短袖"
      },
      {
        value: "毛衣"
      }
    ]
  },
  onLoad() {},
  redirect(){
    my.redirectTo({
      url:"/pages/component/searchlist/searchlist"
    })
  }
  
});

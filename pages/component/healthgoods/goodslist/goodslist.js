Page({
  data: {
      active: false,
      selectedNav: 0,
      listData: [
        {
          nav: '品牌',
          hasalt:null,
        },
        {
          nav: '销量',
          selectedItem: '',
          hasalt:null,
          data: [
            {
              title: '标题文字2'
            },
            {
              title: '标题图片',
            },
            {
              title: '标题文字',
            }
          ]
        },
        {
          nav: '类别',
          selectedItem: '',
          hasalt:null,
          data: [
            {
              title: '标题文字3'
            },
            {
              title: '标题图片',
            },
            {
              title: '标题文字',
            }
          ]
        },
        {
          nav: '价格',
          selectedItem: '',
          hasalt:null,
          data: [
            {
              title: '标题文字4'
            },
            {
              title: '标题图片',
            },
            {
              title: '标题文字',
            }
          ]
        },
      ],
      recom:[
      {
        imgsrc:"/images/allimg.jpg",
        url:"/pages/component/healthgoods/gdetail/gdetail",
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
  onLoad() {
    let listData = this.data.listData;
    console.log(listData.length)
    for(let i=0;i<listData.length;i++){
      let data = listData[i].data;
      if(data){
        if(data.length>0){
          listData[i].hasalt = 1;
        }
      }
    }
    this.setData({
      listData:listData
    })
  },
  
  /**点击出现下拉**/
  _onNavItemTap(e) {
    let listData = this.data.listData;
    const index = e.currentTarget.dataset.index;
    let data = listData[index];
    if(data.data){
      if (this.onDropdownNavItemTap) {
      this.onDropdownNavItemTap(e, index);
      } else {
        console.warn('no onDropdownNavItemTap method');
      }
    }else{
       my.showToast({
        content: `你选中了第${index + 1}`, // 文字内容
        success: (res) => {

        },
      });
    }
  },
  /**点击值***/
  _catchListItemTap(e){
    const { index, parentIndex, title } = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset);
    if (this.catchDropdownNavItemTap){
      this.catchDropdownNavItemTap(e, parentIndex, index, title);
    } else {
      console.warn('no catchDropdownNavItemTap method');
    }
  },
  /***点击空白处隐藏**/
  _catchBgTap(e){
    if (this.catchDropdownBgTap){
      this.catchDropdownBgTap(e);
    } else {
      console.warn('no catchDropdownBgTap method');
    }
  },
  /***设置active和selected**/
  onDropdownNavItemTap(e, index) {
    const { selectedNav, active } = this.data;
    let nextactive = !active;
    if (selectedNav != index) {
      nextactive = true;
    }
    this.setData({
      active: nextactive,
      selectedNav: index
    });
  },
  /****获取值 */
  catchDropdownNavItemTap(e, parentIndex, index, title){
    const { listData } = this.data;
    const data = listData[parentIndex];
    data.selectedItem = index;
    my.showToast({
      content: `你选中了第${parentIndex + 1}个tab的第${index + 1}个元素`, // 文字内容
      success: (res) => {

       },
    });
    this.setData({
      active: false,
      listData
    });
  },
  /***隐藏下拉**/
  catchDropdownBgTap(e){
    this.setData({
      active: false
    });
  }
});

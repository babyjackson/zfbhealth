let hstar = ["/images/hstar.png","/images/hstar.png","/images/hstar.png","/images/hstar.png","/images/hstar.png"];
let ystar = ["/images/ystar.png","/images/ystar.png","/images/ystar.png","/images/ystar.png","/images/ystar.png"];
Page({
  data: {
    hstar:hstar,
    starone:{
      star:ystar
    },
    startwo:{
      star:ystar
    },
    starthree:{
      star:ystar
    },
    chooseimg:[],
    select:true
  },
  onLoad() {},
  chooseImage() {
    my.chooseImage({
      sourceType: ['camera','album'],
      count: 4,
      success: (res) => {
        let imgarr = res.apFilePaths;
        let chooseimg = this.data.chooseimg;
        chooseimg = imgarr;
        this.setData({
          chooseimg:chooseimg
        });
      },
      fail:()=>{
        my.showToast({
          content: 'fail', // 文字内容
        });
      }
    })
  },
  //选择事件
  selectList(e) {//data-index
    //获取data传进来的index
    let selected = !this.data.select
    this.setData({
      select: selected
    });
    console.log(11)
    
  },
  starselect(e){
    let index = e.currentTarget.dataset.index;
    console.log(index)
    let ridx = parseInt(index)+1;//这个值就是几颗星
    let dataname = e.currentTarget.dataset.name;
    let arrs = ["/images/ystar.png","/images/ystar.png","/images/ystar.png","/images/ystar.png","/images/ystar.png"];
    let asp = arrs.splice(0,ridx);
    let axinxin = asp;
    let starone = this.data.starone;
    let startwo = this.data.startwo;
    let starthree = this.data.starthree;
    if(dataname == "ms"){
      starone.star = axinxin;
      console.log(axinxin)
      this.setData({
        starone:starone
      });
    } else if (dataname == "zl"){
      this.setData({
        startwo: {
          star: axinxin 
        }
      })
    } else if (dataname == "my") {
      this.setData({
        starthree: {
          star: axinxin
        }
      })
    }
  }
});

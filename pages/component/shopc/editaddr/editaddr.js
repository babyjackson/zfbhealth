Page({
  data: {
    city:""
  },
  onLoad() {

  },
  /**获取城市*/
  chooseCity() {
    let that = this;
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => {
        that.setData({
          city:res.city
        })
    },
    });
  },
  /**验证**/
  formSubmit(e){
    let warn = "";
    let that = this;
    let flag = false;
    if(e.detail.value.consignee == ""){
      warn = "请填写收货人姓名！";
    }else if(e.detail.value.phone == ""){
      warn = "请填写收货人联系电话！";
    }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.phone))){
      warn = "手机号码格式不正确！";
    }else if(e.detail.value.city == ""){
      warn = "请选择所在城市！";
    }else if(e.detail.value.fulladdr){
      warn = "请填写详细地址！";
    }else{
      flag = true;
    }
    if(flag == false){
      my.alert({
      title: '提示',
      content: warn,
      buttonText: '确定',
      success: () => {
        console.log(e)
      }
    });
    }
  }
});

Page({
  data: {
    time:"获取验证码",
    currentTime: 60,
    disable:null,
    tel:null
  },
  onLoad() {

  },
  /**验证**/
  formSubmit(e){
    let warn = "";
    let that = this;
    let flag = false;
    let tel = null;
    if(e.detail.value.name == ""){
      warn = "请填写收货人姓名！";
    }else if(e.detail.value.tel == ""){
      warn = "输入手机号！";
    }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))){
      warn = "手机号码格式不正确！";
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
  },
  telvalue(e){
    let tel = this.data.tel;
    tel = e.detail.value;
    this.setData({
      tel:tel
    })
  },
  /****获取短信验证码 */
  sendmessage:function(options){
    var that = this;
    var currentTimes = that.data.currentTime;
    var interval;
    console.log(currentTimes)
    interval = setInterval(function (){
      currentTimes--;
      that.setData({
        time: currentTimes + '秒'
      })
      if (currentTimes <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTimes: 61,
          disabled: false
        })
      }
    }, 1000)  
  },
  getVerificationCode(e){
    var that = this;
    let tel = this.data.tel;
    if((/^1(3|4|5|7|8)\d{9}$/.test(tel))){
      console.log(123)
      this.sendmessage();
      that.setData({
        disabled: true
      })
    }
  },
});

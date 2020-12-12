Page({
  data:{
    pic:0,
    a:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00352-3027.jpg",
    arr:
    [
    "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00352-3027.jpg",
    "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00386-819.jpg",
    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1863377069,2124415202&fm=26&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2330369638,4222184598&fm=26&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3566648943,2348587313&fm=26&gp=0.jpg",
    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503710163,2754602036&fm=26&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1932484107,3739005737&fm=26&gp=0.jpg"
  ]
  },
  swip(){
    var pic1=this.data.pic
    var arr1=this.data.arr
    if(pic1<=5){
    this.setData({
      pic:pic1+1
    })
    var pic1=this.data.pic
    this.setData({
      a : arr1[pic1],
    })

    //console.log("成功")
  }else{
    this.setData({
      pic:0,
      a:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00352-3027.jpg"
    })
    //console.log("成功")
  }
  }
})
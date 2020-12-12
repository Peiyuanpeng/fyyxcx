const db = wx.cloud.database()
let mood = ""
let date = ""
let id = ""
Page({
  data:{
    dataObj:"",
    conclusion_0:"",
    conclusion:""
  },
  //添加数据
  addData(){
    db.collection("list").add({
      data:{
        mood: mood,
        date: date
      },
      success:res=>{
        console.log("添加成功",res)
        this.setData({
          conclusion_0:"添加成功"
        })
      },
      fail(res){
        console.log("添加失败",res)
        this.setData({
          conclusion_0:"添加失败"
        })
      }
    })
  },
  getData(){
    db.collection("list").get({
      success:res=>{
        this.setData({
          dataObj:res.data
        })
      }
    })
  },
  //删除数据
  delData(){
    db.collection("list").doc(id).remove({
      success:res=>{
        console.log("删除成功")
        this.setData({
          conclusion: "删除成功"
        })
      },
      fail:res=>{
        console.log("删除失败")
        this.setData({
          conclusion: "删除失败"
        })
      }
    })
  },

  //获取用户输入的心情
  addMood(event){ 
    mood = event.detail.value
  },
  //获取用户输入的时间
  addDate(event){
    date = event.detail.value
  },
  //要删除的id
  delDataInput(event){
    console.log("要删除的id",event.detail.value)
    id = event.detail.value
  }

})
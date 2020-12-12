//app.js
App({
  data:{
    color:"#FF88C2"
  },
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function(options) {
    wx.cloud.init({
      env:'test-0gkb1s0w497d6642'
    })
  },
  onShow: function(options) {

  },
  onHide: function() {

  },
  onError: function(msg) {

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function(options) {

  },
  globalData: {
    userInfo: "hello",
    question: [
{ 
"question": "我闷闷不乐，心情沮丧。",
"option":
{ 
"A": "总是",
"B": "有时", 
"C": "从不" 
} 
},


{ 
"question": "我最不喜欢一天之中的早晨。",
"option": 
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
} 
},


{ 
"question": 
"我一阵阵地想哭",
"option": 
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 


{ 
"question": "我晚上睡不好。",
"option": 
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
 }, 


{
"question": "我没有自己想吃的东西或有想吃的欲望。",
"option":
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 


{
"question": "我和异性相处感到不愉快。", 
"option":
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
},


{
"question":
"我的体重在下降。", 
"option": 
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
},


{
"question":
"我觉得焦虑不安，但不知道因为什么。",
 "option": 
 { 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
},

{
"question":"我无缘无故地感到疲乏。",
"option":
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 


{
"question": "我情绪容易波动。",
"option":
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 


{
"question": "我觉得别人不需要我。",
"option": 
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 


{
"question": "我有过痛不欲生的感觉。",
"option":
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 


{
"question":
"不运动时，我心跳变快，出汗。",
"option":
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 
  

{
"question": "我感到生活没有希望。",
"option":
{ 
"A": "总是", 
"B": "有时",
"C": "从不"
} 
}, 
 

{ 
"question": "我在决定时犹豫不决。", 
"option":
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 


{ 
"question": 
"我觉得我需要硬着头皮做的事很多。",
"option": 
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 
   

{ 
"question":
"我觉得自己身上没有一些独特的东西。",
"option": 
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
},
 

{ 
"question":
"我会便秘。", 
"option": 
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 


{
"question":
"我怀疑有人暗算我。", 
"option":
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
}, 


{ 
"question": 
"我的生活没有意思。", 
"option":
{ 
  "A": "总是",
  "B": "有时", 
  "C": "从不" 
  } 
 }
  ]
  }
  
});
  
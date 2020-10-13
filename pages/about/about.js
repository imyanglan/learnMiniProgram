Page({
// 这里是必须调用这个page函数， 并且在这里需要传入一个对象
// 要将wxml里的变量抽到这里
data:{
// 在data这个对象里面搞一个变量叫name 这里的话这个name叫做属性 这个属性保存的值就是我们
// 需要的名字
   name:'Yanglan',
   age:'18',
// 这样到页面层就不用写死了
//假如这里是从服务器请求到很多的学生数据 它对应的是一个数组类型
   students:[
    
      // 每一个学生又是一个对象
      {id:'001',name:'tom',age:30},
      {id:'002',name:'sunny',age:18},
      {id:'003',name:'star',age:3},
      {id:'004',name:'moon',age:6}
    
   ],
   counter:0
},
// 定义一个函数
handleBtnClick(){
  // 1.错误的做法：界面是不会刷新的
  // this.data.counter++;
  // 界面上是没法监听到这里的数据发生了变化的
  // 如果想界面产生刷新得通过另一种方法
  // 2.this.setData()
  this.setData({
    counter:this.data.counter + 1
  })
},
handleSubtraction(){
  this.setData({
    counter:this.data.counter - 1
  })
}


})
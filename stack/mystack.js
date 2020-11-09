// 栈：先进后出（后进先出）
function Stack () {
  // items 为什么不用this了？ 不安全。 如果用this  对象直接就可以访问这个属性，进行push。===》如果用了this,就相当于把items属性暴露出来，设计一个类，属性被暴露出来，其他任何一个人拿到这个类，都可以去创建对象，然后改变它的属性，别人可以轻易的修改这个对象，就不安全了。
  var items = [] // 存储数据

  // 从栈顶添加元素，也叫压栈
  this.push = function (item) {
    items.push(item)
  }

  // 弹出栈顶元素
  this.pop = function (item) {
    return items.pop() // 知道弹出的元素到底是什么
  }

  // 返回栈顶元素
  this.top = function () {
    return items[items.length - 1]
  }

  // 判断栈是否为空
  this.isEmpty = function () {
    return item.length == 0
  }

  // 返回栈的大小
  this.size = function () {
    return items.length
  }

  // 清空栈
  this.clear = function () {
    items = []
  }
}
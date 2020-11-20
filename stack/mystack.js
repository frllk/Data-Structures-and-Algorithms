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
    return items.length == 0
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

// 判断字符串里的括号是否合法
function is_leagl_brackets (string) {
  let stack = new Stack()
  for (let i = 0; i < string.length; i++) {
    let item = string[i]
    // 遇到左括号入栈
    if (item == '(') {
      stack.push(item)
    } else if (item == ')') {
      // 遇到右括号，判断栈是否为空
      if (stack.isEmpty()) {
        return false
      } else {
        stack.pop() // 弹出左括号
      }
    }
  }
  // 如果栈为空，说明字符串括号合法
  return stack.isEmpty()
}

console.log(is_leagl_brackets('sdf(ds(ew(we)rw)rwqq)qwewe'))
console.log(is_leagl_brackets('(sd(qwqw)sd(sd))'))
console.log(is_leagl_brackets('()()sd()(sd()fw))('))

// 计算逆波兰表达式：后缀表达式
function calc_exp (exp) {
  var stack = new Stack()
  for (var i = 0; i < exp.length; i++) {
    var item = exp[i]
    if (['+', '-', '*', '/'].includes(item)) {
      // 第一次弹出的数放在运算符的右边，第二个弹出的数放在运算符的左边
      var value1 = stack.pop()
      var value2 = stack.pop()
      var exp_str = value2 + item + value1
      // 计算并取整  eval： 计算表达式的结果
      var res = parseInt(eval(exp_str))
      stack.push(res.toString())
    } else {
      stack.push(item)
    }
  }
  return stack.pop()
}

var exp_1 = ["4", "13", "5", "/", "+"]; // 对应的后缀表达式是  4 + 13/5
var exp_2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(calc_exp(exp_1));
console.log(calc_exp(exp_2));
console.log(eval("3 + 5"))

module.exports = Stack
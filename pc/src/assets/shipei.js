
window.onload = function () {
  setHTML()

  // 为了在pc端更好的去调试
  // resize 事件 表示调整大小触发事件
  onresize = function () {
    setHTML()
  }

  function setHTML () {
    // 基础值
    const baseVal = 20
    // 设计稿的宽度
    const pageWidth = 1920
    // 要适配的屏幕的宽度
    let screenWidth = document.querySelector('html').offsetWidth
    // 要设置的fontsize
    let fontsize = screenWidth * baseVal / pageWidth
    // 设置到html标签的中
    document.querySelector('html').style.fontSize = fontsize + 'px'
  }
}

// elements
const drop = document.querySelector('.drop')
const dropIcon = document.querySelector('.drop-icon')
const selfPageImg = document.querySelector('.selfpage-title-img-container')
const contentContainer = document.querySelector('.usericon')
const selfpageNav = document.querySelector('.self-page-nav')
// 用到的数值
const selfpageNavBottom = selfpageNav.getBoundingClientRect().bottom
// const fixedElementTop = contentContainer.getBoundingClientRect().top
const fixedElementBottom = selfPageImg.getBoundingClientRect().bottom
// navbar toggle
// 啊？切换的页面里没有这个element会报错啊 先加上try/catch了 不知道有没有别的更好的办法
try {
  drop.addEventListener('click', function (e) {
    if (drop.classList.contains('selected')) {
      e.preventDefault()
      dropIcon.classList.toggle('rotate')
      console.log(e.currentTarget)
    } else return
  })
} catch {}
// 个人主页向上滚动头像变透明
window.addEventListener('scroll', function () {
  // 计算元素的底部距离顶部的距离
  // const newElementTop = contentContainer.getBoundingClientRect().top
  const newElementBottom = selfPageImg.getBoundingClientRect().bottom
  const changingDistance = newElementBottom - selfpageNavBottom
  const fixedDistance = fixedElementBottom - selfpageNavBottom
  // 设置透明度，距离顶部越远，透明度越高
  const newOpacity = Math.min(1, changingDistance / fixedDistance)
  selfPageImg.style.opacity = newOpacity
  // console.log('elementbottom:' + elementBottom)

  console.log(newOpacity)
})
// functions

//elements
const selfPageImg = document.querySelector('.selfpage-title-img-container')
const contentContainer = document.querySelector('.usericon')
const selfpageNav = document.querySelector('.self-page-nav')
const titleIcon = document.querySelector('.title-icon')
// 个人主页头像上滑透明用到的数值
const selfpageNavBottom = selfpageNav.getBoundingClientRect().bottom
// const fixedElementTop = contentContainer.getBoundingClientRect().top
const fixedElementBottom = titleIcon.getBoundingClientRect().bottom
console.log(titleIcon)
console.log(`fixedElementBottom :${fixedElementBottom}`)
// 个人主页向上滚动头像变透明event
window.addEventListener('scroll', function () {
  // 计算元素的底部距离顶部的距离
  // const newElementTop = contentContainer.getBoundingClientRect().top
  const newElementBottom = titleIcon.getBoundingClientRect().bottom
  const changingDistance = newElementBottom - selfpageNavBottom
  const fixedDistance = fixedElementBottom - selfpageNavBottom
  // 设置透明度，距离顶部越远，透明度越高
  const newOpacity = Math.min(1, changingDistance / fixedDistance)
  selfPageImg.style.opacity = newOpacity
  // console.log('elementbottom:' + elementBottom)
  console.log(`newElementBottom:${newElementBottom}`)
  console.log(newOpacity)
})

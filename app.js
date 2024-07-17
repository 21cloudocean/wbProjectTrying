// elements
const drop = document.querySelector('.drop')
const dropIcon = document.querySelector('.drop-icon')
const menuBanner = document.querySelector('.menu-banner')
const menuList = [...document.querySelectorAll('.menu-list-line')]
console.log(menuList)
// index页 navbar toggle
// 啊？切换的页面里没有这个element会报错啊 先加上try/catch了 不知道有没有别的更好的办法
try {
  drop.addEventListener('click', function (e) {
    if (drop.classList.contains('selected')) {
      e.preventDefault()
      dropIcon.classList.add('rotate')
      // console.log(e.currentTarget)
      menuBanner.classList.remove('none')
    } else return
  })
  menuList.forEach((menuItem) => {
    menuItem.addEventListener('click', function (e) {
      menuList.forEach(function (item) {
        item.classList.remove('selected')
        // console.log('remove')
      })
      e.currentTarget.classList.add('selected')
    })
  })
  menuBanner.addEventListener('click', function (e) {
    if (e.target === menuBanner) {
      // console.log(e.target)
      dropIcon.classList.remove('rotate')
      menuBanner.classList.add('none')
    }
  })
} catch {}
// functions

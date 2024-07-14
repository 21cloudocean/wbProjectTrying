// elements
const drop = document.querySelector('.drop')
const dropIcon = document.querySelector('.drop-icon')

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

// functions

window.onload = function () {
  // elements
  const videoPageBottom = document.querySelector('.videopage-bottom-intro')
  const wholeScreenIcon = document.querySelector('.whole-screen-icon')
  const video = document.querySelector('video')
  const videoPlayControl = document.querySelector('.videopage-playcontrol')
  // const videoPlayIcon = document.querySelector('.video-play-icon')
  const wholeBar = document.querySelector('.progress-bar-parent')
  const currentBar = document.querySelector('.progress-bar')
  const progressIcon = document.querySelector('.progress-icon')
  // 全屏按钮
  wholeScreenIcon.addEventListener('click', function () {
    videoPageBottom.classList.toggle('whole-screen')
  })
  // 进度条所需时间
  let timer = setInterval(function () {
    let timePlayed = video.currentTime
    const timeTotal = video.duration
    let progress = (timePlayed / timeTotal) * 100 + '%'
    currentBar.style.width = progress
    progressIcon.style.left = progress
  }, 100)
  // 进度条拖动进度
  wholeBar.addEventListener('click', function (e) {
    currentBar.style.width = e.offsetX + 'px'
    progressIcon.style.left = e.offsetX + 'px'
    video.currentTime = (e.offsetX / wholeBar.clientWidth) * video.duration
    video.play()
    videoPlayControl.classList.add('none')
  })

  // 点击视频后视频暂停
  video.addEventListener('click', function () {
    videoPlayControl.classList.remove('none')
    video.pause()
  })
  // 点击播放按钮后视频播放
  videoPlayControl.addEventListener('click', function () {
    videoPlayControl.classList.add('none')
    video.play()
  })
  // 视频结束后显示播放按钮
  video.addEventListener('ended', function () {
    videoPlayControl.classList.remove('none')
  })
}

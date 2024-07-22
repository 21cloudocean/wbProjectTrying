window.onload = function () {
  // elements
  const video = document.querySelector('video')
  // const videoPlayIcon = document.querySelector('.video-play-icon')
  const progreeeIcon = document.querySelector('.progress-icon')
  const videoPlayControl = document.querySelector('.videopage-playcontrol')

  // 进度条所需时间
  let timePlayed = video.currentTime
  const timeTotal = video.duration
  console.log(timePlayed, timeTotal)
  let flag = true
  // 点击视频后视频暂停
  video.addEventListener('click', function () {
    flag = false
    videoPlayControl.classList.remove('none')
    video.pause()
  })
  // 点击播放按钮后视频播放
  videoPlayControl.addEventListener('click', function () {
    flag = true
    videoPlayControl.classList.add('none')
    video.play()
  })
}

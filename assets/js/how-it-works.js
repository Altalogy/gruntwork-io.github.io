function showWithoutPatcher() {
    document.querySelector('.section-work-without-patcher').classList.add('section-work-active')
    document.querySelector('.section-work-with-patcher').classList.remove('section-work-active')
    document.querySelector('.with-patcher').classList.remove('active')
    document.querySelector('.without-patcher').classList.add('active')
}

function showWithPatcher() {
    document.querySelector('.section-work-without-patcher').classList.remove('section-work-active')
    document.querySelector('.section-work-with-patcher').classList.add('section-work-active')
    document.querySelector('.with-patcher').classList.add('active')
    document.querySelector('.without-patcher').classList.remove('active')
}
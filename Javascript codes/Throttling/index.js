// api main thoda load kam kar sakte hain

const inputElement = document.querySelector('input')
const span = document.querySelector('h2 span')

const callApi = function(e) {
    console.log('Calling API',e.target.value)
}

inputElement.addEventListener('input', throttle(callApi, 300))

const updateNumber = throttle(() => {
    span.innerText = ++span.innerText
}, 100)


document.addEventListener('mousemove', () => {
    updateNumber()
})





function throttle(func, delay = 1000) {
    let timerId = null
    return (...args) => {
        if(timerId) return
        timerId=setTimeout(() => {
            timerId= null
            func(...args)
        },delay)
    }
}
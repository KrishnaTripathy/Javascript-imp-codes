const inputElement = document.querySelector('input')

const debounce = (func , wait) => {
    let timerId;
    return (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => func(...args), wait)
    }

}
const callApi = (e) => {
    console.log('Calling API', e.target.value)
}
const debouncedCallApi = debounce(callApi, 400)

inputElement.addEventListener('input', debouncedCallApi);
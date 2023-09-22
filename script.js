str = ''
btns = document.querySelectorAll('.button')
console.log(btns);
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str)
            document.querySelector('input').value = str
        }
        else if (e.target.innerHTML == 'C') {
            document.querySelector('input').value = ''
        }
        else {
            str += e.target.innerHTML
            document.querySelector('input').value = str
        }
    })
})
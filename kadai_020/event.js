const btn = document.getElementById('btn')
const text = document.getElementById('text') 

btn.addEventListener('click' , () => {
    if (text.textContent == 'ボタンをクリックしてください') {
        text.textContent ='ボタンをクリックしました'
    }
    else {
        text.textContent = 'ボタンをクリックしてください'
    }


})
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btn5 = document.getElementById('btn-5')

btn1.addEventListener('click', () => { 
    document.querySelectorAll('button').forEach(bnt => {
          btn1.style.width='150px'
    btn1.style.height='50px'
    btn1.style.color = 'brown'
    btn1.style.color = 'brown'
    btn1.style.backgroundColor = 'transparent'
    btn1.style.border='1px solid brown'
    })
})
btn2.addEventListener('click', () => {
    document.querySelectorAll('p').forEach(p => { 
        p.style.padding="35px"
        p.style.padding="35px"
        p.style.padding="35px"
    })
})
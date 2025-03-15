let btn_in = document.querySelector('.btn_in')
let btn_log = document.querySelector('.btn_log')
let btn_close = document.querySelector('.btn-close')
let main = document.querySelector('main')
let rest = document.querySelector('#rest')

    btn_in.addEventListener('click', ()=>{
        main.classList.toggle('dn')
        console.log(rest)
        rest.classList.toggle('dn')
    })
    btn_close.addEventListener('click', ()=>{
        main.classList.toggle('dn')
        console.log(rest)
        rest.classList.toggle('dn')
    })
    btn_log.addEventListener('click', ()=>{
        main.classList.toggle('dn')
        console.log(rest)
        rest.classList.toggle('dn')
    })
    
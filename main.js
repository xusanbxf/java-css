let border = document.querySelectorAll('.items img')
let img = document.querySelector('.img')
let wrapper = document.querySelector('.wrapper')
let ccs = document.querySelector('.click__img')
border.forEach(el=>{
        el.addEventListener('click', function () {
            let attribute = this.getAttribute('src')
            img.setAttribute('src', attribute)
                   wrapper.style.display = 'flex'  
        })
    })
  


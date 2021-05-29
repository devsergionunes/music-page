import outsideClick from './outsideClick.js'

export default function menuMobile() {
    const menuButton = document.querySelector('.menu-mobile')
    const menuControles = document.querySelectorAll('[data-menu="controles"]')
    const menusection = document.querySelector('[data-menu="section"]')
    if(menuControles.length){
        const setEventos = ['click' , 'touchstart']
        setEventos.forEach( evento => { 
            menuButton.addEventListener(evento ,activeMenu )
        })
        
        function activeMenu() {
            menuButton.classList.toggle('active')
            menuControles.forEach( controle => {
                controle.classList.toggle('active')
            })
            menuButton.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
              outsideClick( menusection , setEventos ,  ()=> {
                menuButton.classList.remove('active')
                menuControles.forEach( controle => {
                    controle.classList.remove('active')
                })
              })
        }
    } else {
        console.log('Erro: function menuMobile')
    }
}


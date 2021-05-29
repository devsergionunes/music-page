export default function outsideClick(element , eventos , callBack) {
    const html = document.documentElement
    const datasection = 'data-section'
    element.setAttribute(datasection, '')
    if(!element.getAttribute(datasection)){
        setTimeout( () => {
            eventos.forEach( evento => {
                html.addEventListener(evento , clickForaMenu)
            })
        }) 
    }
    function clickForaMenu(event){
        if(!element.contains(event.target)){
            eventos.forEach( evento => {
                html.removeEventListener(evento , clickForaMenu)
            })
            element.removeAttribute(datasection)
            callBack()
        }
    }
}
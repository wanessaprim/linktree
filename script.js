function toggleMode() {
    const html = document.documentElement

    // if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} else {
    //    html.classList.add('light')
    //}
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
    img.setAttribute('src','./assets/avatar-light3x.png')
    } else{
    img.setAttribute('src','./assets/avatar3x.png')
    }

    if(html.classList.contains('light')){
        img.setAttribute('alt','foto-perfil-light')
    } else{
        img.setAttribute('alt','foto-perfil-dark')
    }

}
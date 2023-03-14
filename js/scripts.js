/*!
* Start Bootstrap - Landing Page v6.0.5 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank

// Use this file to add JavaScript to your project


window.onload = () => {
    //Datos mockeados con prueba para que no gaste
    //las 160 peticiones mensuales
    fetch('./prueba.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}
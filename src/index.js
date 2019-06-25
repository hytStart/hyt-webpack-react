import '@babel/polyfill'
// import bg from './images/scene.png'
// import dataXml from './mockdata/test.xml'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'

// function component() {
//     console.log(dataXml)
//     var element = document.createElement('div')
//     var btn = document.createElement('button')

//     // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//     element.innerHTML = 'asdfdasfdasfdasfdsafdasfafsdfdsasdfafsda'
//     element.classList.add('hello')
//     var myIcon = new Image()
//     myIcon.src = bg
//     element.appendChild(myIcon)
    
//     btn.onclick = printMe
//     btn.innerHTML = 'Click me and check the console!'
//     element.appendChild(btn)



//     return element
// }

// document.body.appendChild(component());

// if (module.hot) {
//     module.hot.accept('./scripts/print.js', function() {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }

if (module.hot) {
    module.hot.accept('./app.js', function() {
        ReactDOM.render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        , document.getElementById('root'))
    })
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById('root'))
import './style/index.css'
import bg from './images/scene.png'
import dataXml from './mockdata/test.xml'
import printMe from './scripts/print.js'

function component() {
    console.log(dataXml)
    var element = document.createElement('div')
    var btn = document.createElement('button')

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = 'asdfdasfdasfdasfdsafdasfafsdfdsasdfafsda'
    element.classList.add('hello')
    var myIcon = new Image()
    myIcon.src = bg
    element.appendChild(myIcon)
    
    btn.onclick = printMe
    btn.innerHTML = 'Click me and check the console!'
    element.appendChild(btn)



    return element
}

document.body.appendChild(component());
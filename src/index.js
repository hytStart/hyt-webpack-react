import './style/index.css'
import bg from './images/scene.png'

function component() {
    var element = document.createElement('div')

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = 'asdfdasfdasfdasfdsafdasfafsdfdsasdfafsda'
    element.classList.add('hello')

    var myIcon = new Image()
    myIcon.src = bg
    element.appendChild(myIcon)

    return element
}

document.body.appendChild(component());
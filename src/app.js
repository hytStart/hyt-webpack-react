import React from 'react'
import Test from './component/print'
import style from './style/index.css'
import styleLess from './style/index.less'

class App extends React.Component {
    render() {
        return (
            <div className={style['hello']}>
                1111111
                <Test />
                <div className={styleLess['test-less']}>44444</div>
            </div>
        )
    }
}

export default App

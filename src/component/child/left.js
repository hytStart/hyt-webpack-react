import React from 'react'
import { ThemeContext } from '../../app'
import FileInput from './file'

class Left extends React.Component {
    // componentWillReceiveProps() {
    //     console.log('测试严格模式')
    // }
    render() {
        console.log(this.context)
        return (
            <div>
                left component
                <FileInput />
            </div>
        )
    }
}

Left.contextType = ThemeContext;
export default Left
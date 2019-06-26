import React from 'react'
import { ThemeContext } from '../../app'

class Left extends React.Component {
    render() {
        console.log(this.context)
        return (
            <div>
                left component
            </div>
        )
    }
}

Left.contextType = ThemeContext;
export default Left
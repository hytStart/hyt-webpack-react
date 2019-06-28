import React from 'react'

class RenderProps extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const resProps = {
            ...this.props,
            age: '18岁了',
        }
        return (
            <div>
                {this.props.children(resProps)}
                {this.props.render(resProps)}
            </div>
        )
    }
}

export default RenderProps
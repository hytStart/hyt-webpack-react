import React from 'react'
import Test from './component/print'
import style from './style/index.css'
import styleLess from './style/index.less'


// import Loadable from 'react-loadable'

// const LoadableTest = Loadable({
//     loader: () => import('./component/print'),
//     loading: () => (<div>loading....</div>),
//   });

class App extends React.Component {
    render() {
        console.log(process.env.NODE_ENV)
        return (
            <div className={style['hello']}>
                1111111
                {/* <LoadableTest /> */}
                <Test />
                {
                    process.env.NODE_ENV === 'dev' ?
                        <div className={styleLess['test-less']}>44444</div> : 
                        <div className={styleLess['test-less']}>666666666666</div>
                }
            </div>
        )
    }
}

export default App

import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Print from './component/print'
import UsersPage from './component/userspage'
import style from './style/index.css'
import bg from './images/scene.png'
import styleLess from './style/index.less'


// import Loadable from 'react-loadable'

// const LoadableTest = Loadable({
//     loader: () => import('./component/print'),
//     loading: () => (<div>loading....</div>),
//   });

export const ThemeContext = React.createContext('light')

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(process.env.NODE_ENV)
        return (
            <ThemeContext.Provider value="dark">
                <React.StrictMode>
                    <div className={style['hello']}>
                        <header>
                            Our React Router 4 App
                            <Link to='/'>home</Link>
                            <Link to='/users'>user</Link>
                        </header>
                        <main>
                            <img style={{ width: '100px' }} src={bg} alt=""/>
                            <Switch>
                                <Route path="/" exact component={Print} />
                                <Route path="/users" component={UsersPage} />
                                <Redirect to="/" />
                            </Switch>
                        </main>
                        {/* <LoadableTest /> */}
                        {
                            process.env.NODE_ENV === 'dev' ?
                                <div className={styleLess['test-less']}>44444</div> : 
                                <div className={styleLess['test-less']}>666666666666</div>
                        }
                    </div>
                </React.StrictMode>
            </ThemeContext.Provider>
        )
    }
}

export default App

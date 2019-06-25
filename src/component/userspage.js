import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Left from './child/left'
import Right from './child/right'

class UserPage extends React.Component {
    render () {
        console.log(this.props.match)
        const { path } = this.props.match
        return (
            <div>
                2UserPageUserPageUserPage
                <br/>
                <Link to={`${path}/left`}>Left Router</Link>
                &nbsp;
                <Link to={`${path}/right`}>Right Router</Link>
                <br/>
                -------------------------------------
                <br/>
                <Switch>
                    <Route path="/users/left" exact component={Left} />
                    <Route path="/users/right" component={Right} />
                    {/* <Redirect to="/" /> */}
                </Switch>
            </div>
        )
    }
}

export default UserPage
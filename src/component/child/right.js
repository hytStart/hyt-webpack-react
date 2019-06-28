import React from 'react'
import { DatePicker } from 'antd'
import ErrorBoundary from '../../common/ErrorBoundary'
import Test from './child'


function Right(props) {
    return (
        <ErrorBoundary>
            <DatePicker />
            <Test>
                <div>huangyiting</div>
            </Test>
        </ErrorBoundary>
    )
}


export default Right
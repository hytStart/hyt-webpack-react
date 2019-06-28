import React from 'react'
import { DatePicker } from 'antd'
import ErrorBoundary from '../../common/ErrorBoundary'
import Test from './child'
import RenderProps from './renderProps'


function Right(props) {
    const renderProps = {
        a: 1,
        userName: '黄义亭',
    }
    return (
        <ErrorBoundary>
            <DatePicker />
            <Test>
                <div>huangyiting</div>
            </Test>
            --------------------------------------
            {/* 兼容不报错。两种都写了 */}
            <RenderProps {...renderProps} render={({userName, age}) => <div>1111111{userName}{age}</div>}>
                {({userName, age}) => <div>1111111{userName}{age}</div>}
            </RenderProps>


            {/* 使用children,children prop 并不真正需要添加到 JSX 元素的 “attributes” 列表中。相反，你可以直接放置到元素的内部！ */}
            {/* <RenderProps {...renderProps} render={({userName, age}) => <div>1111111{userName}{age}</div>}>
                {({userName, age}) => <div>1111111{userName}{age}</div>}
            </RenderProps> */}

            {/* 随意命名，使用render，必须添加在 JSX 元素的 “attributes” 列表中 */}
            {/* <RenderProps {...renderProps} render={({userName, age}) => <div>1111111{userName}{age}</div>} /> */}
        </ErrorBoundary>
    )
}


export default Right
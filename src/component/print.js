import React from 'react'

function printMe(props) {
    console.log('I get called from print.js!');
    console.log(props)

    return (
        <div>
            print.js
        </div>
    )
}

// class PrintMe extends React.Component {
//     render () {
//         return (
//             <div>
//                 ssssssfdfdfsdafsad
//             </div>
//         )
//     }
// }

export default printMe
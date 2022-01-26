import React, { Component, useState } from 'react';
import List from './List';
import App from '../app';


const Lists = (props) => {
        
    // if(loading) return <p>Loading....</p>

    if(props.item == undefined)
        return false;
    // if(props.item[1] != undefined)
    // {
        return(
            // <tr>
            <ul className={`displayU_${props.display}`}>
                {props.item.map((item,idx) => (
                    <List 
                    // item1 = {props.item[0]}
                    // item2 = {props.item[1]}
                        item = {item}
                        onListClick = {props.onListClick}
                        display = {props.display}
                    />
                ))}
                
                
            </ul>
            // </tr>           
        ); 
    // }
    // else
    // {
    //     return(
    //         <ul>
    //             <List 
    //                 // item1 = {[props.item[0].snippet.title, props.item[0].snippet.channelTitle, props.item[0].snippet.thumbnails.default.url]}
    //                 item1 = {props.item[0]}
    //                 display = {props.display}
    //             />
    //         </ul>           
    //     );
    // }
}

// class Lists extends Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     <li>
//                     {this.props.lists.map(list => (
//                         <List key={list.id}
//                             snippet={list.snippet}
                        
//                         >


//                         </List>

//                     ))}
//                     </li>    
//                 </ul>
//             </div>
//         );
//     }
// }

export default Lists;
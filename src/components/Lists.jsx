import React, { Component, useState } from 'react';
import List from './List';
import App from '../app';

const Lists = ({item, display, onListClick}) => {
        
    // if(loading) return <p>Loading....</p>

    if(item == undefined)
        return false;
    // if(item[1] != undefined)
    // {
        return(
            // <tr>
            <ul className={`displayU_${display}`}>
                {item.map((item,idx) => (
                    <List 
                    // item1 = {item[0]}
                    // item2 = {item[1]}
                        key={item.id}
                        item = {item}
                        onListClick = {onListClick}
                        display = {display}
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
    //                 // item1 = {[item[0].snippet.title, item[0].snippet.channelTitle, item[0].snippet.thumbnails.default.url]}
    //                 item1 = {item[0]}
    //                 display = {display}
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
//                     {this.lists.map(list => (
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
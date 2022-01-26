import React, { Component, memo, useCallback, useRef } from 'react';

const List = memo (
  ({item,onListClick, display}) => {
    const onClick = useCallback(() => {
      onListClick(item);
    },[onListClick, item])

    if(item != undefined)
    {
      const img_src1 = item.snippet.thumbnails.default.url;
      const c_title_src1 = item.snippet.channelTitle;
      const title_src1 = item.snippet.title;    
    
      return(
          <>
            <li className={`display_${display}`} onClick={onClick}>
              <div id='box1'>
                <img src={img_src1}></img>
              </div>
              <div id='box2'>
                {c_title_src1}
                {title_src1}
              </div>
            </li>
          </>
        );
      }   
    }
 );  



// class List extends Component {
//     componentDidMount(){
//         console.log(`list: ${this.props.snippet.title} mounted`);
//     }

//     componentWillUnmount(){
//         console.log(`list:${this.props.snippet.title} unmounted`);
//     }

//     render() {
//         const img_url = this.props.snippet.thumbnails.default.url;
//         return (
//             <table>
//                 <tbody>
//                     <td></td><img src={img_url}></img>
//                     <td></td>
//                 </tbody>
//             </table>
//         );
//     }
// }

export default List;
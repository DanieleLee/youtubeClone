import React, { Component, useCallback, useRef } from 'react';


const Search = (props) => {
    const display = props.display;
    // const searchInput = useRef(null);
    // const onChange = useCallback(() => {
    //     searchInput.current.focus();
    //     console.log(searchInput.current.value);
    // },[searchInput]);

    return(
        <>
            <ul className={`searchU_${display}`}>
                <img src='img/youtube-logo.png'></img>
                <input type="text" className={`${display}`} onChange={props.inputKeyW}/>
                <img src='img/search.png' className='icon_search'></img>         
            </ul>     
        </>
    );

}

// class Search extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

export default Search;
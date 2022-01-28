import React, { Component } from 'react';


const Search = (props) => {
    const display = props.display;

    return(
        <>
            <img src='img/youtube-logo.png'></img>
            <input type="text" className={`${display}`}/>
            <img src='img/search.png'></img>
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
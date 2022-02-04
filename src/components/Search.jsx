import React, { Component, useCallback, useRef } from 'react';


const Search = (props) => {
    const display = props.display;
    const selectList = props.selectList;
    const keyWord = props.keyWord;
    const onClick = useCallback((item) => {
        props.onListClick(item);
      },[props.onListClick]);
    
    const handleSearch = () => {
        console.log(props.inputKey.current.value);
        // value = props.inputKey.current.value;
        // props.inputKeyW(value);
    }
    // const searchInput = useRef(null);
    // const onChange = useCallback(() => {
    //     searchInput.current.focus();
    //     console.log(searchInput.current.value);
    // },[searchInput]);

    return(
        <>
            <ul className={`searchU_${display}`}>
                <img src='img/youtube-logo.png'></img>
                <input type="text" className={`${display}`} onChange={props.inputKeyW} ref={props.inputKey}/>
                <button type='submit' className='searchU_Bt' onClick={handleSearch}>
                    <img src='img/search.png' className='icon_search'></img>
                </button>              
            </ul>

            {keyWord &&(
                <div className='keyWSearch'>
                    {keyWord.map((item, idx) => (
                        keyWord[idx].snippet &&(
                            <div className={`searchK_${selectList ? 'grid' : 'flex'}`} onClick={() => { onClick(item) }}>
                            <img src={keyWord[idx].snippet.thumbnails.default.url}></img>
                            <p>{keyWord[idx].snippet.title}</p>          
                            </div> 
                        )
                    ))}      
                </div>
            )
            }     
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
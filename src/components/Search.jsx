import React, { Component, useCallback, useRef, memo } from 'react';


const Search = memo(
    (props) => {
        const display = props.display;
        // const selectList = props.selectList;
        const keyWord = props.keyWord;
        const onClick = useCallback((item) => {
            props.onListClick(item);
        },[props.onListClick]);
        
        const handleSearch = useCallback((item) => {
            // value = props.inputKey.current.value;
            // props.inputKeyW(value);
            let param = {
                value : props.inputKey.current.value,
                mode : "search"
            }

            props.inputKeyW(param);
    
            console.log(props.inputKey.current.value);
        })
        // const searchInput = useRef(null);
        // const onChange = useCallback(() => {
        //     searchInput.current.focus();
        //     console.log(searchInput.current.value);
        // },[searchInput]);
        return(
            <>
                <ul className={`searchU_${display}`}>
                    <div className='logo_div' onClick={() => { onClick(null)}}>
                        <img src='img/youtube-logo.png' ></img>
                    </div>
                    <input type="text" className={`${display}`} onChange={props.inputKeyW} ref={props.inputKey}/>
                    <button type='submit' className='searchU_Bt' onClick={handleSearch}>
                        <img src='img/search.png' className='icon_search'></img>
                    </button>              
                </ul>
                
                {keyWord &&(
                    <div className={`keyWSearch_${display}`}>
                        {keyWord.map((item, idx) => (
                            keyWord[idx].snippet &&(
                                <div className={`searchK_${display}`} onClick={() => { onClick(item) }}>
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
)
// class Search extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

export default Search;
import { Component, useState ,useEffect, useRef, useCallback} from 'react';
import './app.css';
import Lists from './components/Lists';
import ListCss from './styles/ListCss.css';
import ListDetail from './components/ListDetail';
import Search from './components/Search';

// class App extends Component {

//   state={
//     lists:[
      
//     ]
//   }
//   render(){
//     return (
//      <>
     
//       <Lists 
//         lists={this.state.lists}
//       />
//      </>
//     )
//   };
  
// }

const App = ({ youtube }) => {
  const [lists, setLists] = useState([]);
  const [selectList, setSelectList] = useState(null);
  const [keyWord, setKeyWord] = useState([]);
  const [clickSearch, setClickSearch] = useState(false);
  // const [loading, setLoading] = useState(true);
  
  const inputKey = useRef(null);

  const selectVideo = (video) => {
    setSelectList(video);
    setLists(youtube.items);
  };

  const search = useCallback((query) => {
    // fetch(`https://content-youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${event}&key=`, requestOptions)
    //   .then(response => response.json())
    //   .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
    //   .then(items => console.log(setKeyWord(items)))
    //   .catch(error => console.log('error', error)); ===> 이코드가 아래코드로 대체

    // setSelectList(null);
    // youtube.search(query).then(items => setSelectList(items));

    setSelectList(null);
    console.log(lists.includes(query));
  },[])

  const inputKeyW =  (event) => {
      // const requestOptions = {
      //   method: 'GET',
      //   redirect: 'follow'
      // };
      
      if(event.mode === "search"){
        let filt_lists = lists.filter(l => l.snippet.title.toLowerCase().includes(event.value));
        setLists(filt_lists);
        setKeyWord(null);
        return;
      }

      inputKey.current.value = event.currentTarget.value;

      if(inputKey.current.value == "")
      {
        setKeyWord(null);
        return;
      }

      if(lists != undefined)
      {
        let filt_lists = lists.filter(l => l.snippet.title.toLowerCase().includes(inputKey.current.value));
        setKeyWord(filt_lists);
      }
  }

  useEffect(() => {

    return () => {
      setKeyWord(null);
      inputKey.current.value = null;
    }
  
  }, [selectList]);

   useEffect(() => {
    //  fetch("https://content-youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=")
    //       .then((res) => res.json())
    //       .then((data) => {    
    //         setLists(data.items)
    //         setLoading(false)
    //       });
    
    /* non Injection */
    setLists(youtube.items);
    /* Injection */
    // youtube
    //   .mostPopular()
    //   .then((videos) => setLists(videos))
    console.log('useEffect()loaded');
  },[youtube]);

  // if(loading) return <p>Loading....</p>
    return(
      <>
        <div  className='search'>
          <Search 
            display= {selectList ? 'grid' : 'flex'}
            inputKeyW = {inputKeyW}
            inputKey={inputKey}
            keyWord = {keyWord}
            onListClick = {selectVideo}
            searchVideo = {search}
          />
          {/* <Search 
            display= {selectList ? 'grid' : 'flex'}
            inputKeyW = {inputKeyW}
            inputKey={inputKey}
            selectList = {selectList ? 'grid' : 'flex'}
            keyWord = {keyWord}
            onListClick = {selectVideo}
            inputKeyW = {inputKeyW}
          /> */}
        </div>
        {/* {keyWord &&(
          <div className='keyWSearch'>
            {keyWord.map((item, idx) => (
              keyWord[idx].snippet &&(
                <div className={`searchK_${selectList ? 'grid' : 'flex'}`} >
                  <img src={keyWord[idx].snippet.thumbnails.default.url}></img>
                  <p>{keyWord[idx].snippet.title}</p>          
                </div> 
              )
            ))}      
          </div>
        )
        } */}
        <div className='app'>
          {selectList &&(
              <ListDetail
                list={selectList}
                onListClick = {selectVideo}
              />
            )
          }
            <Lists 
              // item={[lists[idx*2], lists[(idx*2) + 1]]}
              item = {lists}
              onListClick = {selectVideo}
              display= {selectList ? 'grid' : 'flex'}
            />
        </div>
      </>
    );
  
}

export default App;

import { Component, useState ,useEffect, useRef} from 'react';
import './app.css';
import Lists from './components/Lists';
import ListCss from './styles/ListCss.css';
import YoutubeData from './sample/youtube.json';
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

const App = (props) => {
  const [lists, setLists] = useState([]);
  const [selectList, setSelectList] = useState(null);
  const [keyWord, setKeyWord] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const inputKey = useRef(null);

  const selectVideo = (video) => {
    setSelectList(video);
  };

  const inputKeyW =  (event) => {
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // fetch(`https://content-youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${event}&key=`, requestOptions)
    //   .then(response => response.json())
    //   .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
    //   .then(items => console.log(setKeyWord(items)))
    //   .catch(error => console.log('error', error));

    var inputKeyW = event.currentTarget.value; 

    if(inputKeyW == "")
    {
      setKeyWord(null);
      return;
    }

    if(lists != undefined)
    {
      var filt_lists = lists.filter(l => l.snippet.title.toLowerCase().includes(inputKeyW));
      setKeyWord(filt_lists);
    }
  };

  useEffect(() => {
    return () => {
      // setKeyWord(null);
      // inputKeyW(null);
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
    
    setLists(YoutubeData.items);
    console.log('useEffect()loaded');
  });

  // if(loading) return <p>Loading....</p>
  if(lists != undefined)
  {
    return(
      <>
        <div  className='search'>
          <Search 
            display= {selectList ? 'grid' : 'flex'}
            inputKeyW = {inputKeyW}
            inputKey={inputKey}
            selectList = {selectList ? 'grid' : 'flex'}
            keyWord = {keyWord}
            onListClick = {selectVideo}
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
  
  // return {lists, loading};
}

export default App;

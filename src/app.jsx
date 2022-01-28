import { Component, useState ,useEffect} from 'react';
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
  const [loading, setLoading] = useState(true);

  const selectVideo = (video) => {
    setSelectList(video);
    console.log(selectList);
  }
   useEffect(() => {
    //  fetch("https://content-youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=")
    //       .then((res) => res.json())
    //       .then((data) => {    
    //         setLists(data.items)
    //         setLoading(false)
    //       });
    console.log('useEffect()loaded');
    setLists(YoutubeData.items);
  });

  // if(loading) return <p>Loading....</p>
  if(lists != undefined)
  {
    return(
      <>
        <div  className='search'>
          <Search 
            display= {selectList ? 'grid' : 'flex'}
          />
        </div>
        <div className='app'>
          {selectList &&(
              <ListDetail
                list={selectList}
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

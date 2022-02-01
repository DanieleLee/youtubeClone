import React, { Component} from 'react';

const ListDetail = (props) => {

    const video_url = "https://www.youtube.com/embed/" + props.list.id;

    return(
        <>
            <div className='ListDetail'>
            <ul>
                <iframe 
                    width="560" 
                    height="315" 
                    src= {video_url}
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen />
            </ul> 
                <ul>{props.list.snippet.title}</ul>
                <ul>{props.list.snippet.channelTitle}</ul>
                <ul>{props.list.snippet.description}</ul>
                
            </div>
        </>
    );
}


// class ListDetail extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

export default ListDetail;
import axios from "axios";

class Youtube{
    //*inject version
    constructor(httpClient){
        this.youtube = httpClient;
    }

    // constructor(key){
    //     this.youtube = axios.create({
    //         baseURL: 'https://content-youtube.googleapis.com/youtube/v3',
    //         params:{key: key}
    //     })                   
    // }

    // async get(){
    //     try{

    //     }catch(error){
    //         return console.log('error:', error);
    //     }
    // }

    async mostPopular(){
        try {
            const response = await this.youtube.get('videos',{
                params:{
                    part: 'snippet',
                    chart: 'mostPopular',
                    maxResults:25,
                }
            });
            return  response.data.items;
        } catch (error) {
            return console.log('error', error);
        }
      }

      async search(query){
        try {
            const response = await this.youtube.get('videos',{
                params:{
                    part: 'snippet',
                    chart: 'mostPopular',
                    maxResults:25,
                    q: query
                }
            });
              const result_1 = await response.data.items;
              return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
          } catch (error) {
              return console.log('error', error);
          }
      }

}

export default Youtube;
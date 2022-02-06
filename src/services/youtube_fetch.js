class Youtube{
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
                       
    }

    async mostPopular(){
        try {
            const response = await fetch(
                "https://content-youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=squidgame&key=",
                this.getRequestOptions
            );
            const result_1 = await response.json();
            return result_1.items;
        } catch (error) {
            return console.log('error', error);
        }
      }

      async search(event){
        try {
              const response = await fetch(
                  `https://content-youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${event}&key=`,
                  this.getRequestOptions
              );
              const result_1 = await response.json();
              return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
          } catch (error) {
              return console.log('error', error);
          }
      }

}

export default Youtube;
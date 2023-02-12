export const getGitfs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=3d8m51iIrzmQBT1eUBgm809srtAEoEQ5&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
  
    const gits = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
  
    //console.log(gits);
    return gits;
  
}


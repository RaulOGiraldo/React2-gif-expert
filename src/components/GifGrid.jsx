//import { useEffect, useState } from "react";
// import { getGitfs } from '../helpers/getGifs';

import { GifItem } from './GifItem';
import { useFectchGifs } from '../hooks/useFectchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFectchGifs( category );


  // const [images, setImages] = useState([]);

  // const getImages = async() => {
  //     const newImages = await getGitfs(category);
  //     setImages(newImages);
  // }

  // useEffect( () => {
  //   getImages();
  // }, [])

  
  return (
    <>
        <h3>{ category }</h3>
        {
          // isLoading
          // ? (<h2>Cargando ...</h2>) 
          // : null

          isLoading && (<h2>Cargando ...</h2>) 
          
        }
        

        <div className="card-grid">
            { 
              images.map( ( image ) => (
                <GifItem 
                    key={ image.id }
                    { ...image }
                    
                    // title={ image.title }
                    // url={ image.url}
                />
                // <li key={ id }>{ title }</li>
              )) 
            }
          
        </div>
    </>
  )
}



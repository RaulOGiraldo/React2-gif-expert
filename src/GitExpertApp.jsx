import { useState } from 'react';
import { AddCatagory, GifGrid } from './components';

export const GitExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {
    //console.log(newCategory);
    // Valorant
    //categories.push('Valorant');

    if ( categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ]);

    //setCategories( cat => [ ...cat, 'Valorant']);
  }  

  return (
    <>
      {/* Titulo */}
      <h1>GitExpertApp</h1>

      {/* Input */}
      <AddCatagory 
        // setCategories={ setCategories }
          onNewCategory={ onAddCategory }
      />

      {/* Listado de Gifs */}

      {/* <ol> */}

        { categories.map( (category ) => (
              <GifGrid 
                  key={ category } 
                  category={ category } 
              />
          ))
        }

      {/* </ol> */}
        {/* Git Item */}
        
    </>
  )
}

import { useEffect, useState } from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import {GifGridItem} from '../components/GifGridItem';
export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);
  // const apiKey = '8avblfQHd0GqPCICPHAOw5ZYrrvhw0uI';
  // const resp   = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${ apiKey }`);

  return (
    <>
     <h3> {category}</h3>
     {
      isLoading  && (<h2>Cargando....</h2>) 
     }
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} image={img}/>
        ))}
      </div>
    </>
  );
};

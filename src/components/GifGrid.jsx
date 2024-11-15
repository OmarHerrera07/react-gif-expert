import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    {isLoading && <h3>Loading...</h3>}
    <div className="card-grid">
        { 
            images.map( (image) => (
                <GifItem key={ image.id } {...image}></GifItem>
            ))
        }
    </div>
    </>
  )
}

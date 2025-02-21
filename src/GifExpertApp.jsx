import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]); 
  }

  console.log(categories)
  return (
    <>
    <h1>GifExpertApp w</h1>

    <AddCategory 

    onNewCategory = {onAddCategory}
    
    ></AddCategory>
    
      {
        categories.map((category,i) => ( 
          <GifGrid key={ category } category={ category }></GifGrid>
        ))
      }
  </>
  )
}

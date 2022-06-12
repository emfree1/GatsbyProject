import * as React from "react"


 const FilterPosts = ({collection, filterClick}) => {
  return(
    <div className='filter-posts container-lg'>
      <div className='filter-posts--wrapper container-md'>

        {collection.map((el,index) => (
          <button onClick={() => filterClick(el)} key={`${el}-${index}`} className="filter-posts--wrapper__btn">{el}</button>
        ))}
      </div>
    </div>
  )
}
export default FilterPosts
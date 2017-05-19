import React from 'react';

const Category = (props) => {
  return (
    <li>
      <a href=""
         className="category--link"
         onClick={(e) => {
           e.preventDefault();
           props.categoryClick(props.categoryName)
         }
      }>{props.categoryName}</a>  
    </li>
  )
}

export default Category;

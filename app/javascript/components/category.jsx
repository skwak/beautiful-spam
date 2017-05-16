import React from 'react';

function Category(props) {
  return <li><a href='' className='category--link' onClick={() => props.onCategoryClick(props.name)}>{props.name}</a></li>
}

export default Category;

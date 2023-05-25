import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  <>
    <div className='cards'>
    <div className='card'>
    <img src="" alt="myPic" className='card__img' />
    <div className='card__info'>
    <span className='card__category'></span>
    <h3 className='card__title'></h3>
    <a href="" target='_blank'>
      <button>Watch Now</button>
    </a>

    </div>
    </div>

    </div>
  </>,
  document.getElementById('root')
);

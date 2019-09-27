import React from 'react';

import './menu-item.styles.scss';

// 分割代入 https://tech.innovator.jp.net/entry/2017/11/24/111124 
// title,imageUrl,sizeは全てpropsとして渡ってきている
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div className="background-image" style={{
      backgroundImage: `url(${ imageUrl })`
    }}/>
    <div className="content">
      <h1 className="title">{ title.toUpperCase() }</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component{
  constructor(){
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render(){
    return(
      <div className="directory-menu">
        {/* map関数の展開されるアロー関数の第一引数の中にはsections配列の要素の1つ1つが入っている */}
        {/* title,imageUrl,id,sizeは全てsections配列の要素のオブジェクトに含まれるプロパティで、プロパティの値をpropsとして渡している */}
        {/* https://qiita.com/syumai/items/b8d0a752740a31402477 */}
        {/* propsとしてこういう渡し方があるというのは覚えておくこと */}
        { this.state.sections.map( ({ title, imageUrl, id, size}) => (
          // jsxで変数を使う場合は中括弧でくくる
          <MenuItem key={id} title={ title } imageUrl={ imageUrl } size={ size }/>
        ))}
      </div>
    )
  }
}

export default Directory;
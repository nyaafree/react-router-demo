import React, { Component } from 'react';
import './App.css';
// Switch,Routeコンポーネントを読み込む
import { Switch,Route } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends Component {
  render() {
    return (
    <div>
      {/* <HomePage/> */}
      {/* <Route/>コンポーネントにexact属性をつけないと'/hats'にアクセスされても'/hats’に指定したコンポーネントのみならず、
      '/'に指定したコンポーネントも表示されてしまう。 */}
      {/* Switchコンポーネントの中にRouteコンポーネントを入れておくと現在のパスと適合するRouteコンポーネントのみを表示してくれる。 */}
      <Switch>
        <Route exact  path='/' component={ HomePage }/>
        <Route exact path='/hats' component={ HatsPage }/>
      </Switch>
      
    </div>
    )
  }
}

export default App;

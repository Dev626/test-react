import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import ListProduct from './components/list-product/List-product';
import Product from './components/product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Context from './components/context/Context';

function App() {
  return (
    <Context>
      <Router>
        <Header />
        <Search />
        <Switch>
          <Route exact path="/product/:id" component={Product} />
          <Route path="/" component={ListProduct} />
        </Switch>
      </Router>
    </Context>
  );
}

export default App;

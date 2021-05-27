import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Headernav from './containers/Headernav';
import ProductListing from './containers/ProductListing';
import Bigchart from './containers/IndividualStockFetch';
import CryptoListing from './containers/Cryptolisting';
// import test from './containers/IndividualStockFetch'

function App() {
  return (
    <div className="App">
      <Router>
        <Headernav />
        <Switch>
          <Route path="/" exact component = {ProductListing}/>
          <Route path="/Crypto" component = {CryptoListing}/>
          <Route path="/Bigchart" render={() => <Bigchart legendPosition="bottom"/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
    
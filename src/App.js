import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Headernav from './containers/Headernav';
import ProductListing from './containers/ProductListing';
import Bigchart from './containers/IndividualStockFetch';
// import test from './containers/IndividualStockFetch'

function App() {
  return (
    <div className="App">
      <Router>
        <Headernav />
        <Switch>
          <Route path="/" exact component = {ProductListing}/>
          {/* <Route path="/Crypto" component = {ProductDetails}/> */}
          <Route path="/Bigchart" render={() => <Bigchart legendPosition="bottom"/>}/>
          {/* <Route path="/test" component = {test}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

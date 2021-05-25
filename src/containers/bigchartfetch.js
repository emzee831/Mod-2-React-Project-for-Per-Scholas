// import React from "react";
// import axios from 'axios';



// class Chartfetch extends React.Component {
//   handleLoadTickerClick = () => {
//     this.props.onLoadTicker();

  
//         fetch("https://api.twelvedata.com/time_series?symbol=AAPL,&interval=1week&apikey=708c8cf825194910aa7b6c2a817b9283")
//         // .catch((err) => {
//         //     console.log("Err", err);
//         // });
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .then(json => this.props.onLoadStocksComplete(json))
//     };



//   render() {
//     return (
//       <div className="Chartfetch">
//         <h1>React, Redux, and Data Handling</h1>
//         <p>
//           Click the load Stock button below to start loading Stocks from the api
//         </p>
//         <p>
//           <button onClick={this.handleLoadTickerClick}>Load Stock</button>
//         </p>
//         <hr />
//         <h3>Stocks</h3>
//         {this.props.loading ? <p>loading...</p> : null}
//         {!this.props.loading && this.props.Stocks ? (
//           <ul>
//             {this.props.Stocks.map(stock => (
//               <li key={stock.id}>
//               </li>
//             ))}
//           </ul>
//         ) : null}
//       </div>
//     );
//   }
// }


// export default Chartfetch {data}
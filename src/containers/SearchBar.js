// import React from "react";
// // import LineChart from './IndividualStockFetch'



// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ""};
//         // this.state = this.props.searchbar;
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.onChange = this.onChange.bind(this);
//       }
    
//       handleSubmit(event) {
//         event.preventDefault();
//         this.setState({ value: event.target.value });
//       }


//       onChange(event) {
//           this.setState({ value: this.props.searchbar });
//         //   this.setState = this.props.searchbar
//       }

//     render() {
//         return (
//         <div>
//             <form onSubmit={this.onChange} className="searchbar">
//             <div>
//               <label for="searchsymbol">Type ticker symbol</label>
//               <input id="searchsymbol" type="text" name="text"/>
//             </div>
//             <div>
//               <input type="submit" value="Send"/>
//             </div>
//           </form>
//         </div>
//         );
//     }
// }


// export default SearchBar 


// {/* <p>
// //           Click the load Stock button below to start loading Stocks from the api
// //         </p> */}
// //         <p>
// //           <button onClick={this.handleLoadSearchbar}>Load Stock</button>
// //         </p>
// //         <hr />
// //         <h3>Stocks</h3>
// //         {this.props.loading ? <p>loading...</p> : null}
// //         {!this.props.loading && this.props.Stocks ? (
// //           <ul>
// //             {this.props.Stocks.map(stock => (
// //               <li key={stock.id}>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : null}
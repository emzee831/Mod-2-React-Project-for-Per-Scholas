// import React, { useState } from 'react';
// import Plot from 'react-plotly.js';

// // import indivStockFetch from './IndividualStockFetch'


// class Chart extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       chartDatax: props.xValues,
//       chartDatay: props.yValues
//     }
//   }

//   render(){
//     return(
//       <div className="chart">
//         <Plot
//         data={[
//           {
//             x: this.props.chartDatax,
//             y: this.props.chartDatay,
//             type: 'scatter',
//             mode: 'lines+markers',
//             marker: {color: 'red'},
//           },
//         ]}
//         layout={{width: 1500, height: 440, title: 'Apple'}}
//       />
//       </div>
//     )
//   }
// }

// export default Chart;
import React, { Component } from "react";
// import Chart from "./Bigchartdisplay";
import Plot from 'react-plotly.js';
import '../containers/Bigchart.css'

class Stock extends Component {
    constructor(props){
        super(props);
        this.state = {
          stockChartXValues: [],
          stockChartYValues: [],
          currentStock: "FB"
        }
        this.fetchStock = this.fetchStock.bind(this)
    }

    componentDidMount() {
        this.fetchStock(); 
    }
    
    
    fetchStock() {
      const pointToThis = this;
      console.log(pointToThis);
      const apikey = '708c8cf825194910aa7b6c2a817b9283'
      let symbol = this.state.currentStock
      let API_Call = `https://api.twelvedata.com/time_series?symbol=${symbol},&interval=1month&apikey=${apikey}`; 
      let stockChartXValuesFunction = [];
      let stockChartYValuesFunction = [];
      
      
      fetch(API_Call)
        .then(
          function(response) {
            return response.json();
          }
        )
        .then(
           (data) =>  {
            console.log(data);
            let allvalues = data[this.state.currentStock].values;
            console.log(allvalues);

            allvalues.map(key => {
              stockChartXValuesFunction.push(key.datetime);
            })
            allvalues.map(key => {
              stockChartYValuesFunction.push(key.close);
            })

            console.log(stockChartXValuesFunction);
            console.log(stockChartYValuesFunction);

            pointToThis.setState({
              stockChartXValues: stockChartXValuesFunction,
              stockChartYValues: stockChartYValuesFunction,
            });
          }
        )  
    }

    render() {
      return (
        <div>
          {/* <Blank current={this.state.curruentStock}> */}
          <h1 id="stocknameheader">{this.state.currentStock}</h1>
          {/* <Chart xValues={this.state.stockChartXValues}/>
          <Chart yValues={this.state.stockChartyValues}/> */}
          {/* <p>x-values: {this.state.stockChartXValues}</p>
          <p>y-values: {this.state.stockChartYValues}</p> */}
          <Plot
            data={[
              {
                x: this.state.stockChartXValues,
                y: this.state.stockChartYValues,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
              },
            ]}
            layout={{width: 1900, height: 600, title: 'Stock chart'}}
          />
        </div>
      )
    }
}

export default Stock
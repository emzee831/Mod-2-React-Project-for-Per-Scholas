import { TimeScale } from "chart.js";
import React, { Component } from "react";
import Plot from 'react-plotly.js';
import '../containers/Bigchart.css'
// import Searchfield from './SearchBar'

class Stock extends Component {
    constructor(props){
        super(props);
        this.state = {
          stockChartXValues: [],
          stockChartYValues: [],
          currentStock: "amd"
        }
        this.fetchStock = this.fetchStock.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStockname = this.handleStockname.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
    }

    handleStockname(event) {
      this.setState({currentStock: event.target.value});
  }

    handleSubmit(event) {
      event.preventDefault();
      this.setState({ currentStock: event.target.value });
    }
    
    handleStockChange(event) {
      event.preventDefault();
      this.fetchStock();
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
          <h1 id="stocknameheader">{this.state.currentStock}</h1>
          <form onSubmit={this.handleStockChange}>
            <div>
              <label for="searchsymbol">Type ticker symbol</label>
              <input id="searchsymbol" contentEditable="true" type="text" value={this.state.currentStock} name="text" onChange={this.handleStockname}/>
            </div>
            <div>
              <input type="submit" value="Send" onChange={this.handleStockChange}/>
            </div>
          </form>
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
          {/* <Searchfield searchbar={this.state.currentStock}/> */}
        </div>
      )
    }
}

export default Stock
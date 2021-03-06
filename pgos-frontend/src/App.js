import React, { Component } from 'react';
import Header from "./containers/Header"
import ReactTable from "react-table"
import StarRatingComponent from 'react-star-rating-component';
import './App.css';
import 'react-table/react-table.css'

class App extends Component {

  state = {
    orders: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/orders")
    .then(res => res.json())
    .then(data => {
      this.setState({
        orders: data
      })
    })
  }

  addOrder = (order, e) => {
    fetch("http://localhost:3000/api/v1/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(console.log)
  }

  render() {

    const data = this.state.orders

    let sortedList = data.sort((a, b) => new Date(...a.ship_date.split('/').reverse()) - new Date(...b.ship_date.split('/').reverse()));

    const columns = [{
      Header: 'Coffee',
      accessor: 'coffee'
    }, {
      Header: 'Method',
      accessor: 'brew_method',
    }, {
      Header: 'Number of Cases',
      accessor: 'cases'
    }, {
      Header: "Packets per Case",
      accessor: "packets_per"
    }, {
      Header: "Ship Date",
      accessor: "ship_date"
    }, {
      Header: "Priority",
      accessor: "priority",
      Cell: row => (
                    <span>
                      {
                      row.value === true ? <StarRatingComponent editing={false} starCount={1}/> : null
                    }
                    </span>
                  )
  }, {
    Header: "Order",
    accessor: "id"
  }]

    return (
      <div className="App">
        <Header addOrder={this.addOrder}/>
          <br></br>
          <br></br>
        <ReactTable
          noDataText={null}
          showPageSizeOptions={false}
          sortable={false}
          showPaginationBottom={true}
          defaultPageSize={25}
          data={sortedList}
          columns={columns}
          />
      </div>
    );
  }
}

export default App;

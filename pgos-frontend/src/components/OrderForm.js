import React, { PureComponent } from 'react';

class OrderForm extends PureComponent {

  state = {
    coffee: "Bella Donovan",
    brew_method: "Aeropress",
    ship_date: "",
    cases: 0,
    packets_per: 25,
    notes: "",
    priority: false
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
      <button id="close" onClick={this.props.closeModal}>close</button>
      <h2>Perfectly Ground Work Orders</h2>
      <div>Instructions</div>
      <br></br>
      <form onSubmit={(e) => this.props.addOrder(this.state, e)} onChange={this.handleChange}>
      <div id="left">
      <p>Coffee*</p>
      <select name="coffee">
        <option value="Bella Donovan">Bella Donovan</option>
        <option value="Giant Steps">Giant Steps</option>
      </select>
      <br></br>
      <br></br>
      <p>Ship Date*</p>
      <input name="ship_date" type="date" id="myDate"/>
      <br></br>
      <br></br>
      </div>
      <div id="right">
      <p>Brew Method*</p>
      <select name="brew_method">
        <option value="Aeropress">Aeropress</option>
        <option value="Coffee Maker">Coffee Maker</option>
        <option value="Cold Brew">Cold Brew</option>
        <option value="French Press">French Press</option>
        <option value="Pour Over">Pour Over</option>
      </select>
      <br></br>
      <br></br>
      <p>Number of Cases*</p>
      <input name="cases" type="number"  min="0" value={this.state.cases}/>
      <p>Packets Per Case*</p>
      <select name="packets_per">
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      </div>
      <br></br>
      <textarea name="notes" placeholder="Notes" rows="4" cols="50" value={this.state.notes}></textarea>
      <br></br>
      <input type="checkbox" name="priority" value="true"/>Priority
      <br></br>
      <br></br>
      <input type='submit' name='submit' value='Submit Work Order' />
      </form>
      </div>
    );
  }
}

export default OrderForm;

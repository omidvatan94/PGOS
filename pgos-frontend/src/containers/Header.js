import React, { PureComponent } from 'react';
import Moment from 'react-moment';
import Modal from 'react-modal';
import OrderForm from "../components/OrderForm"

class Header extends PureComponent {

  state = {
    modalIsOpen: false,
  };


  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {

  const customStyles = {

    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

    return (
      <div>
      <br></br>
      <div id="left">
            <Moment format="MM/DD"/>
      </div>
            <div className="title">
              Perfectly Ground Work Orders
            </div>
            <div className="button">
            <br></br>
            <button onClick={this.openModal}>Create Order</button>
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
            >
            <OrderForm addOrder={this.props.addOrder} closeModal={this.closeModal}/>
            </Modal>
          </div>
    );
  }

}

export default Header;

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {addToCart} from './actions/cartActions';


class Home extends Component {

  handleClick = (id) => {
    this.props.addToCart(id);
  }


  render() {

    const { auth } = this.props;
    if (!auth.uid) {
          return <Redirect to="/signin" />;
    }

    let itemList = this.props.items.map(item => {
      return (<div className="card hoverable" key={item.id}>
        <div className="card-image">
          <img src={item.img} alt={item.title} />
          <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => {
              this.handleClick(item.id)
            }}>
            <i className="material-icons">add</i>
          </span>
        </div>

        <div className="card-content">
          <span className="card-title">{item.title}</span>
          <p>{item.desc}</p>
          <p>
            <b>Price: {item.price}
              Rs</b>
          </p>
        </div>
      </div>)
    })

    return (<div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">
        {itemList}
      </div>
    </div>)
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    items: state.cart.items
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

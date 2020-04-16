import React, { Component } from "react";
import YourSubCard from "../components/YourSubCard.js"

class YourSubs extends Component {

  render() {
    const {subscriptions, handleClick, handleEditClick} = this.props

    return (
      <div className="ui segment inverted violet">
          <p>Your Subscriptions</p>
        <div className="ui four column grid">
          <div className="row">
            {subscriptions.map(sub => <YourSubCard sub={sub} key={sub.id} handleEditClick={handleEditClick} handleClick={handleClick}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourSubs;
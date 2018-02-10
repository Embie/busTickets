import React, { Component } from 'react';



class Profile extends Component {
  render() {
    return (
        <div className="App">
            <div>
                <img src="" />
            </div>
            <div>
                <p>Name:</p>
                <p>email</p>
                <p>Phone</p>
            </div>
            <table>
            <tr>
              <th>Дата</th>
              <th>Час</th>
              <th>Линия</th>
              <th>Цена</th>
              <th></th>
            </tr>
            <tr>
              <td>12.03.2016</td>
              <td>15:00</td>
              <td>Plovdiv-Sofiq</td>
              <td>4 lv</td>
              <td><button>Kupi</button></td>
            </tr>
            </table>
        </div>
     
    );
  }
}

export default Profile;

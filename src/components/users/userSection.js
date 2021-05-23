import React, { Component } from 'react'
import UserForm from './userForm'
import UserList from './userList'

class UserSection extends Component {

  render() {
    return (
      <div className='support card card-primary'>
        <div className="card-header">
          <strong>Users</strong>
        </div>
        <div className='card-body users'>
          <UserList {...this.props} />
          <UserForm {...this.props} />
        </div>
      </div>
    )
  }

}

// UserSection.propTypes = {
//   users: React.PropTypes.array.isRequired,
//   setUserName: React.PropTypes.func.isRequired
// }

export default UserSection

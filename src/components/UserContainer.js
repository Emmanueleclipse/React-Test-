import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Fragment>
      <h2 className="text-center my-3">Users List</h2>
      {userData}
      {
        userData.loading ? (
          <h2>Loading...</h2>
        ) : userData.error ? (
          <h2>{userData.error}</h2>
        ) : (
          <div className="container">
            <table className="table table-striped table-hover table-sm">
            <thead className="thead-dark">
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
            {userData.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
            </tbody>
          </table>
          </div>
        )
      }
    </Fragment>
  ) 
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;
    return (
        <div className="header">
            <div className="bounds">
            <Link to='/'><h1 className="header--logo"> Awesome Courses</h1></Link>
            <nav>
              {authUser ?
                <React.Fragment>
                  <span>Welcome, {authUser.firstName}!</span>
                  <Link to="/signout">Sign Out</Link>
                </React.Fragment>
                :
                <React.Fragment>
                  <Link className="signup" to="/signup">Sign Up</Link>
                  <Link className="signin" to="/signin">Sign In</Link>
                </React.Fragment>
              }
            </nav>
            </div>
        </div>
    );
  }
};

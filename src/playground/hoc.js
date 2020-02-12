import React from 'react';

const Info = props => {
    return (
        <div>
          <h1>Info</h1>
            <p>The info is: {props.info} </p>
        </div>
    );
};

// Pattern (HOC) Higher Order Component (Reuse code)

const withAdminWorning = (WrappedComponent) => {
    return (props) => (      // <------ HOC
        <div>
            <p>This private info please donot share!</p>
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
      <div>
          {props.isAuthenticated && <p>Welcome authenticated user</p>}
          <WrappedComponent {...props}/>
      </div>
    )
}

const AdminInfo = withAdminWorning(Info)
const AuthInfo = requireAuthentication(Info)

export default AuthInfo;
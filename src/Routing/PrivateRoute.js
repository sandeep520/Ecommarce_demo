// import React from 'react';
// import { Route,Navigate } from 'react-router-dom';
// // import { isLogin } from '../utils';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     let user = localStorage.getItem("validUser");

//     return (

//         <Route {...rest} render={props => (
//             user ?
//                 <Component {...props} />
//             : <Navigate to="/login" /> 

//         )} />
//     );
// };

// export default PrivateRoute;
// import React from "react";
// import { Route ,Navigate} from "react-router-dom";
// import { getAuthToken } from "../utils/localstorage";

// const PrivateRoute = (props) => {
//   const {component,path,exact,redirectTo}=props
//   const condition = getAuthToken();
//   debugger;
//   return condition !== null &&
//     condition !== undefined &&
//     condition !== 'undefined' &&
//     condition === true ? (
//     <Route path={path} exact={exact} component={component} />
//   ) : (
//     <>
//       {path === '/' || path==='/signup' ? (
//         <Navigate to={path} />
//       ) : (
//         <Navigate to={redirectTo} />
//       )}
//     </>
//   );
// };
// export default PrivateRoute;
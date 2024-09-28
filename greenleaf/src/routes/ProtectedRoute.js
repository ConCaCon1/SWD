// import { Navigate } from "react-router-dom";
// import config from "../config";

// export const ProtectedRoute = ({ element, allows }) => {
//   const user = localStorage.getItem("user");

//   if (!user) {
//     return <Navigate to={config.routes.signIn} />;
//   } else {
//     const router = JSON.parse(user)?.role;
//     const result = allows.findIndex((item) => item === router);
//     if (result === -1) {
//       return <Navigate to={config.routes.home} />;
//     }
//   }

//   return element;
// };

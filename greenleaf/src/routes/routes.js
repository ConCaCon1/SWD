import config from "../config";
import ChangePassword from "../pages/ChangePassword";
import ContactUs from "../pages/ContactUs";
import EmailVerification from "../pages/EmailVerification";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import SignUpSteps from "../pages/SignUpSteps";
const publicRoutes = [
  // ai cũng truy cập đc
  { path: config.routes.home, component: Home },
  { path: config.routes.changepassword, component: ChangePassword },
  { path: config.routes.emailverification, component: EmailVerification },
  { path: config.routes.forgotpassword, component: ForgotPassword },
  { path: config.routes.login, component: Login },
  { path: config.routes.signup, component: SignUp },
  { path: config.routes.signupsteps, component: SignUpSteps },
  {path:config.routes.contactus, component: ContactUs},
];

const privateRoutes = [
  // có quyền mới truy cập đc
];

export { publicRoutes, privateRoutes };

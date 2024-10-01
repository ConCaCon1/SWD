import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout } from "./layouts";
import { Fragment } from "react";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Home from "./pages/Home"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  // <Layout>
                    <Page />
                  // </Layout>
                }
              />
            );
          })}

          {privateRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedRoute
                    allows={route.alows}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
    // <Home></Home>
  );
}

export default App;

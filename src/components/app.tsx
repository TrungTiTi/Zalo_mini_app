import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages/home";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
import Footer from "../common/Footer/Footer";
import ListType from "../pages/ListType/ListType";
import DetailProduct from "../pages/DetailProduct/DetailProduct";
import PaymentDefault from "../pages/Payment/PaymentDefault";

const Element = ({ children }) => {
  return (
    <div className="element">
      {children}
      <Footer></Footer>
    </div>
  );
};

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route
                path="/"
                element={
                  <Element>
                    <HomePage></HomePage>
                  </Element>
                }
              ></Route>
              <Route
                path="/about"
                element={
                  <Element>
                    <About></About>
                  </Element>
                }
              ></Route>
              <Route
                path="/form"
                element={
                  <Element>
                    <Form></Form>
                  </Element>
                }
              ></Route>
              <Route
                path="/user"
                element={
                  <Element>
                    <User></User>
                  </Element>
                }
              ></Route>
              <Route
                path="/type/:id"
                element={
                  <Element>
                    <ListType></ListType>
                  </Element>
                }
              ></Route>
              <Route
                path="/detail/:id"
                element={
                  <Element>
                    <DetailProduct></DetailProduct>
                  </Element>
                }
              ></Route>
              <Route
                path="/payment/:id"
                element={<PaymentDefault></PaymentDefault>}
              ></Route>
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;

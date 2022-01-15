import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

export default function HomeTemplate(props) {
  const { Component, ...restProps } = props;
  return (
    <Fragment>
      <Route
        exact
        path={props.path}
        render={(propsRoute) => {
          return (
            <Fragment>
              <Header />
              <Component {...propsRoute} />
              <Footer />
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
}

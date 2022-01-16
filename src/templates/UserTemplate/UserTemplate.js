import React, { Fragment } from "react";
import { Route } from "react-router-dom";
export default function UserTemplate(props) {
    const { Component, ...restProps } = props;
    return (
        <Fragment>
            <Route
                exact
                path={props.path}
                render={(propsRoute) => {
                    return (
                        <Fragment className="container_all">
                           <div className="row">
                           <div className="col-6">
                                <img className="img-fluid" src="https://i.imgur.com/1qgTh2Q.jpeg" alt="" />
                            </div>
                            <div className="col-6"> <Component {...propsRoute} /></div>
                           </div>
                        </Fragment>
                    );
                }}
            />
        </Fragment>
    )
}

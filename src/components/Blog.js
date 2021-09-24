import React, { Component } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Cars from "./Cars";
import Dogs from "./Dogs";
import Recipes from "./Recipes";

export default function Blog(props) {
    const { path, url } = useRouteMatch();
    console.log(path);
    console.log(url);
    return <div>
        <h1>Blog</h1>
        <ul>
            <li><Link to={`${url}/dogs`}>Dogs</Link></li>
            <li><Link to={`${url}/cars`}>Cars</Link></li>
            <li><Link to={`${url}/recipes`}>Recipes</Link></li>
        </ul>

        <Switch>
            <Route path={`${path}/dogs`}>
                <Dogs/>
            </Route>
            <Route path={`${path}/cars`}>
                <Cars/>
            </Route>
            <Route path={`${path}/recipes`}>
                <Recipes/>
            </Route>
        </Switch>
    </div>
}

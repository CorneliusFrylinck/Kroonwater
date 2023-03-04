import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>
        <Route path='/contact' ></Route>
        <Route path='/disclaimer' ></Route>
        <Route path='/products/:categoryId' ></Route>
        <Route path='/product/:productId' ></Route>
        <Route path='/services' ></Route>
        <Route path='/whyUseUs' ></Route>
    </Route>
);
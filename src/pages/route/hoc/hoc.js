import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

const crud = React.lazy(() => import('./CRUD/crud'));

function hoc() {
    return (
        <React.Suspense fallback={<div>加载中...</div>}>
            <Switch>
                <Route exact path='/hoc' render={() => ((<Redirect to='/hoc/crud'/>))}/>
                <Route path='/hoc/crud' component={crud}/>
                {/*<Route path='/context/consumer' component={consumer}/>*/}
            </Switch>
        </React.Suspense>
    )
}

export default hoc;

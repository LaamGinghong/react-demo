import * as React from "react";

let Child = React.lazy(() => import('./child'));

class Parent extends React.Component {
    render() {
        return (
            <React.Suspense fallback={<p>加载中...</p>}>
                <Child/>
            </React.Suspense>
        )
    }
}

export default Parent;

import React from 'react';
import Child from './child';

function Parent() {
    const className = ['blue', 'yellow', 'pink'];
    const component = className.map((item, index) => {
        return (
            <Child className={item} key={index}>
                这是父亲投影进去的内容
            </Child>
        )
    });
    return (
        <div>
            相当于ng中的ng-content
            {component}
        </div>
    )
}

export default Parent;

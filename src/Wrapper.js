import React from 'react';
import Dashboard from './component/Dashboard.js';
import Navi from './Navi.js';

class Wrapper extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Navi />
                </div>
                <div>
                    <Dashboard />
                </div>
            </div>
        )
    }
}

export default Wrapper;
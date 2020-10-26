import React from 'react';
import { Link } from 'react-router-dom';

class Navi extends React.Component{
    render(){
        return(
            <div>
                <nav style={{backgroundColor: "#e3f2fd"}} className="navbar navbar-light">
                    <ul style={{textAlign: "left"}}>
                        <li style={{display: "inline-block", padding: "0px 20px 0px 20px"}}><Link to="/dash">Dashboard</Link></li>
                        <li style={{display: "inline-block", padding: "0px 20px 0px 20px"}}><Link to="/input">Data Berat Badan</Link></li>
                        <li style={{display: "inline-block", padding: "0px 20px 0px 20px"}}><Link to="/add">Tambah Data</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navi;
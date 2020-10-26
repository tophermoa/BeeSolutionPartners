import React from 'react';
import axios from 'axios';
import GLine from '../grafik/GLine.js';
import GPie from '../grafik/GPie.js';
import GBar from '../grafik/GBar.js';

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            rata: [],
            avg: [],
            gob: null,
            arr: null
        }
    }

    componentDidMount() {
        const url = 'http://localhost/api/backend.php';
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ rata: data })
         })
    }
    
    

    

    render(){
        var ra = this.state.rata.reduce(function (r, a) {
            r[a.tanggal] = r[a.tanggal] || [];
            r[a.tanggal].push(a.durasi);
            return r;
        }, Object.create(null));
        var gob = ra['2020-10-27'] && ra['2020-10-27'].reduce((a, b) => a +  Number(b), 0)
        var arr = ra['2020-10-27'] && ra['2020-10-27'].length
        var tot = gob / arr
        console.log(ra)
        console.log(Math.round(tot))
        return(
            <div>

                <div className="row">

                <div className="col-xl-8 col-lg-7">
                    
                <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Monitoring berat badan</h6>
                </div>
                <div className="card-body">
                  <div className="chart-area" style={{height: 500}}>
                    <GLine />
                  </div>
                  <hr />
                  Rata - rata berat badan
                </div>
              </div>

              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Jumlah Keseluruhan Waktu</h6>
                </div>
                <div className="card-body">
                  <div className="chart-bar" style={{height: 400}}>
                    <GBar />
                  </div>
                  <hr />
                </div>
              </div>

              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Jumlah Hari ini</h6>
                </div>
                <div className="card-body">
                  <div className="chart-bar" style={{height: 500}}>
                    <GPie />
                  </div>
                  <hr />
                </div>
              </div>

                </div>
                </div>



            </div>
        )
    }
}

export default Dashboard;
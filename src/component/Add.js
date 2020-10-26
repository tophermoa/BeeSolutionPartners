import React from 'react';
import {MuiPickersUtilsProvider, DatePicker} from "material-ui-pickers";
import DateMomentUtils from "@date-io/moment";
import axios from 'axios';
import swal from 'sweetalert';

class Add extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tgl: null,
            jenis: '',
            durasi: '',
            bb: '',
            keterangan: ''
        }
    }

    handleTgl = newdate => {
        const sidateTime = newdate.unix();
        const converter = new Date(sidateTime * 1000)
        const tanggal = converter.getDate();
        const bulan = converter.getMonth() + 1;
        const tahun = converter.getFullYear();
        const gabungan = tahun +"-"+ bulan +"-"+ tanggal;
		console.log(this.state.tgl)
        console.log(gabungan);
        this.setState({
            tgl: gabungan
        })
    };

    inputData=(e)=>{
        e.preventDefault();

        const sidateTime = this.state.tgl.unix();
        const converter = new Date(sidateTime * 1000)
        const tanggal = converter.getDate();
        const bulan = converter.getMonth() + 1;
        const tahun = converter.getFullYear();
        const gabungan = tahun +"-"+ bulan +"-"+ tanggal;
		console.log(this.state.tgl)
		console.log(gabungan);
    }

    handleFormSubmit( event ) {
        event.preventDefault();
        
        let isiForm = new FormData();
        isiForm.append('tgl', this.state.tgl)
        isiForm.append('jenis', this.state.jenis)
        isiForm.append('durasi', this.state.durasi)
        isiForm.append('bb', this.state.bb)
        isiForm.append('keterangan', this.state.keterangan)

        axios({
            method: 'post',
            url: 'http://localhost/api/backend.php',
            data: isiForm,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (res) {
            swal({
                title: "Data Berhasil Ditambah",
                icon: "success"
              })

        })
        .catch(function (res) {
            console.log(res)
        });
    }

    render(){
        return(
            <div>
            <form>
            <table>
                <tr>
                    <td>Tanggal</td>
                    <td>
                        <MuiPickersUtilsProvider utils={DateMomentUtils}>
                                <div>
                                    <div>
                                    <DatePicker
                                        clearable
                                        value={this.state.tgl}
                                        placeholder="Input tanggalnya"
                                        onChange={this.handleTgl} 
                                        minDate={new Date()}
                                        format="MM/dd/yyyy"
                                    />
                                </div>
                            </div>
                        </MuiPickersUtilsProvider>
                    </td>
                </tr>
                <tr>
                    <td>Jenis Kegiatan</td>
                    <td>
                        <select className="custom-select" name="jenis" id="jenis" onChange={e => this.setState({ jenis: e.target.value })}>
                            <option value="">Pilih...</option>
                            <option value="Makan">Makan</option>
                            <option value="Tidur">Tidur</option>
                            <option value="Aktifitas Lain">Aktifitas Lain</option>
                            <option value="Olahraga">Olahraga</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Durasi (Menit)</td>
                    <td><input className="form-control" type="number" onChange={e => this.setState({ durasi: e.target.value })} /></td>
                </tr>
                <tr>
                    <td>Berat Badan (Kg)</td>
                    <td><input className="form-control" type="text" onChange={e => this.setState({ bb: e.target.value })} /></td>
                </tr>
                <tr>
                    <td>Keterangan</td>
                    <td><input className="form-control" type="textarea" onChange={e => this.setState({ keterangan: e.target.value })} /></td>
                    <td><button type="submit" className="btn btn-success" onClick={e => this.handleFormSubmit(e)}>Save</button></td>
                    <td><button type="reset" className="btn btn-warning">Reset</button></td>
                </tr>
            </table>
            </form>
            </div>
        )
    }
}

export default Add;
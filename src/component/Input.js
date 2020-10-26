import React from 'react';
import {MuiPickersUtilsProvider, DatePicker} from "material-ui-pickers";
import DateMomentUtils from "@date-io/moment";
import axios from 'axios';
import Modal from 'react-modal';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import swal from 'sweetalert';
   
   
  function showTotal() {
    return <p>There are 100 items total</p>
  }

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tglAwal: null,
            tglAkhir: null,
            datas: [],
            modal: false,
            getId: '',
            tglUbah: null,
            jenis: '',
            durasi: '',
            bb: '',
            keterangan: ''
        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }


    handleTglAwal = newdate => {
        const sidateTime = newdate.unix();
        const converter = new Date(sidateTime * 1000)
        const tanggal = converter.getDate();
        const bulan = converter.getMonth() + 1;
        const tahun = converter.getFullYear();
        const gabungan = tahun +"-"+ bulan +"-"+ tanggal;
    	this.setState({
      		tglAwal: gabungan
        });
        console.log(this.state.tglAwal)
    };
      
      handleTglAkhir = newdate => {
        const sidateTime = newdate.unix();
        const converter = new Date(sidateTime * 1000)
        const tanggal = converter.getDate();
        const bulan = converter.getMonth() + 1;
        const tahun = converter.getFullYear();
        const gabungan = tahun +"-"+ bulan +"-"+ tanggal;
    	this.setState({
      		tglAkhir: gabungan
        });
        console.log(this.state.tglAkhir)
    };
      

    cariData=(e)=>{
        e.preventDefault();

		const sidateTime = this.state.tglAkhir.unix();
		console.log(this.state.tglAkhir)
		console.log(sidateTime);
    }

    componentDidMount() {
        if(this.state.tglAwal == null){
            const url = 'http://localhost/api/backend.php';
            axios.get(url).then(response => response.data)
            .then((data) => {
              this.setState({ datas: data })
              console.log(this.state.datas)
             })
        } else {
            const url = 'http://localhost/api/find.php';
            axios.get(url).then(response => response.data)
            .then((data) => {
              this.setState({ datas: data })
              console.log(this.state.datas)
             })
        }
    }

    modalClose =()=>{
        this.setState({
            modal: false
        })
    }
    
    modalShow = (idnya) => {
        this.setState({
            modal: true
        })
        this.setState({
            getId: idnya
        })
    }

    handleTglUbah = newdate => {
        const sidateTime = newdate.unix();
        const converter = new Date(sidateTime * 1000)
        const tanggal = converter.getDate();
        const bulan = converter.getMonth() + 1;
        const tahun = converter.getFullYear();
        const gabungan = tahun +"-"+ bulan +"-"+ tanggal;
        this.setState({
            tgl: gabungan
        })
    };

    handleFormSubmit( event ) {
        event.preventDefault();
        
        let formUpdate = new FormData();
        formUpdate.append('id', this.state.getId);
        formUpdate.append('tgl', this.state.tgl)
        formUpdate.append('jenis', this.state.jenis)
        formUpdate.append('durasi', this.state.durasi)
        formUpdate.append('bb', this.state.bb)
        formUpdate.append('keterangan', this.state.keterangan)

        axios({
            method: 'post',
            url: 'http://localhost/api/edit.php',
            data: formUpdate,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (res) {
            swal({
                title: "Data Berhasil diubah",
                icon: "success"
              }).then(()=>
              window.location.reload())

        })
        .catch(function (res) {
            console.log(res)
        });
    }

    onDelete(id){
        
        let formDelete = new FormData();
        formDelete.append('id', id);

        axios({
            method: 'post',
            url: 'http://localhost/api/delete.php',
            data: formDelete,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then(function (res) {
            swal({
                title: "Data Berhasil dihapus",
                icon: "success"
              }).then(()=>
              window.location.reload())

        })
        .catch(function (res) {
            console.log(res)
        });
    }

    pencarian=()=>{
        let formCari = new FormData();
        formCari.append('tglAwal', this.state.tglAwal);
        formCari.append('tglAkhir', this.state.tglAkhir)
        formCari.append('jenis', this.state.jenis)
        formCari.append('durasi', this.state.durasi)

        axios({
            method: 'get',
            url: 'http://localhost/api/find.php',
            data: formCari,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (res) {
            console.log(res)

        })
        .catch(function (res) {
            console.log(res)
        });
    }

    render(){
        const options = {
            page: 4,
            prePage:  '⟵',
            nextPage: '⟶',
            firstPage: '⟸',
            lastPage: '⟹',
            paginationShowsTotal: showTotal
          }
        return(
            <div>
                <table>
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
                        <td>Tanggal</td>
                        <td>
                            <MuiPickersUtilsProvider utils={DateMomentUtils}>
                                <div>
                                    <div>
                                    <DatePicker
                                        clearable
                                        value={this.state.tglAwal}
                                        placeholder="Input tanggalnya"
                                        onChange={this.handleTglAwal} 
                                        minDate={new Date()}
                                        format="MM/dd/yyyy"
                                    />
                                    </div>
                                </div>
                            </MuiPickersUtilsProvider>
                        </td>
                        <td>s / d</td>
                        <td>
                        <MuiPickersUtilsProvider utils={DateMomentUtils}>
                                <div>
                                    <div>
                                    <DatePicker
                                        clearable
                                        value={this.state.tglAkhir}
                                        placeholder="Input tanggalnya"
                                        onChange={this.handleTglAkhir} 
                                        minDate={this.state.tglAwal}
                                        format="MM/dd/yyyy"
                                    />
                                    </div>
                                </div>
                            </MuiPickersUtilsProvider>
                        </td>
                        <td><button className="btn btn-primary" type="button" onClick={this.pencarian}>Cari Data</button></td>
                    </tr>
                </table>

                <table className="table table-bordered" border='1' width='100%' >
                    <tr>
                        <th>Tanggal</th>
                        <th>Jenis Kegiatan</th>
                        <th>Durasi</th>
                        <th>Keterangan</th>
                        <th>Berat Badan</th>
                        <th>Action</th>     
                    </tr>

                    {this.state.datas.map((data) => (
                    <tr>
                        <td>{ data.tanggal }</td>
                        <td>{ data.jenis_kegiatan }</td>
                        <td>{ data.durasi }</td>
                        <td>{ data.keterangan }</td>
                        <td>{ data.berat_badan }</td>
                        <td><button className="btn btn-danger" type="submit" onClick={()=>this.onDelete(data.id)}>Delete</button>
                            <button className="btn btn-primary" onClick={()=> this.modalShow(data.id)}>
                                Edit
                            </button>
                            <Modal
                                isOpen={this.state.modal}
                                onRequestClose={this.modalClose}
                                contentLabel="Example Modal"
                            >
                        
                                <button onClick={this.modalClose} className="btn btn-danger">close</button>
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
                                                                value={this.state.tglUbah}
                                                                placeholder="Input tanggalnya"
                                                                onChange={this.handleTglUbah} 
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
                                            <td><button className="btn btn-success" type="submit" onClick={e => this.handleFormSubmit(e)}>Save</button></td>
                                            <td><button className="btn btn-warning" type="reset">Reset</button></td>
                                        </tr>
                                    </table>
                                </form>
                                </Modal>
                        </td>
                    </tr>
                    ))}
                </table>

            </div>
        )
    }
}

export default Input;
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css';

const ListMhs = () =>{
    const [mahasiswa, setMhs] = useState([]);

    useEffect(() => {
        getMhs();
    },[]);

    const getMhs = async () => {
        const response = await axios.get('http://localhost:5000/mhs');
        setMhs(response.data);
    }

    const deleteMhs = async (id) => {
        await axios.delete(`http://localhost:5000/mhs/${id}`);
        getMhs();
    }

    return (
        
        <div class='container'>
            <section class="hero ungu ">
               <div class="hero-body">
                <p class="title">DATA MAHASISWA UNIVERSITAS GUNADARMA</p>
               
                </div> 
            </section>
       
            <div class="buttons has-addons is-centered">
            <Link to={"/add"} className="button is-primary mt-5">Tambah Data</Link>
                
            {/* <table className="table is-striped is-fullwidth mt-5"></table> */}
            <table className="table is-bordered is-fullwidth mt-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>NPM</th>
                        <th>Nama</th>
                        <th>Kelas</th>
                        <th>KUIS</th>
                        <th>UTS</th>
                        <th>UAS</th>
                        <th class='container has-text-centered'>AKSI</th>
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map((mhs, index) => (
                            <tr key={ mhs.id }>
                                <td>{ index+1 }</td>
                                <td>{ mhs.npm } </td>
                                <td>{ mhs.nama }</td>
                                <td>{ mhs.kelas }</td>
                                <td class='container has-text-centered'>{ mhs.kuis }</td>
                                <td class='container has-text-centered'>{ mhs.uts }</td>
                                <td class='container has-text-centered'>{ mhs.uas }</td>
                                <td class='container has-text-centered'>
                                    <Link to={`/edit/${mhs.id}`} className="button is-small is-success is-rounded mr-2 ">Edit</Link>
                                    <button onClick={ ()=> deleteMhs(mhs.id)} className="button is-small is-danger is-rounded is-outlined ">Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
        </table>
       </div>
       </div>
     
           
        
    )

}

export default ListMhs;
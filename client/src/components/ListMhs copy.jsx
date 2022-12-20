// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import '../App.css';

// const ListMhs = () =>{
//     const [mahasiswa, setMhs] = useState([]);

//     useEffect(() => {
//         getMhs();
//     },[]);

//     const getMhs = async () => {
//         const response = await axios.get('http://localhost:5000/mhs');
//         setMhs(response.data);
//     }

//     const deleteMhs = async (id) => {
//         await axios.delete(`http://localhost:5000/mhs/${id}`);
//         getMhs();
//     }

//     return (
        
//         <div className="container">
//              <section class="hero ungu">
//                 <div class="hero-body">
//                     <p class="title">DATA MAHASISWA
//                     </p>
//                     <p class="subtitle">
//                         CRUD adalah singkatan dari Create, Read, Update, dan Delete.
//                         </p>
//                         </div>
                        
//                     </section>
//                     <div class="buttons has-addons is-centered">
//             <Link to={"/add"} className="button is-primary mt-5">Tambah Data</Link>
//             </div>
//             {/* <table className="table is-striped is-fullwidth mt-5"></table> */}
//             <div class="hero-body">
//     <div class="container has-text-centered">
//             <table className="table is-striped is-fullwidth mt-5">
//                 <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>NPM</th>
//                         <th>Nama</th>
//                         <th>Kelas</th>
//                         <th>KUIS</th>
//                         <th>UTS</th>
//                         <th>UAS</th>
//                         <th>AKSI</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {mahasiswa.map((mhs, index) => (
//                             <tr key={ mhs.id }>
//                                 <td>{ index+1 }</td>
//                                 <td>{ mhs.npm } </td>
//                                 <td>{ mhs.nama }</td>
//                                 <td>{ mhs.kelas }</td>
//                                 <td>{ mhs.kuis }</td>
//                                 <td>{ mhs.uts }</td>
//                                 <td>{ mhs.uas }</td>
//                                 <td>
//                                     <Link to={`/edit/${mhs.id}`} className="button is-small is-info mr-2">Edit</Link>
                        
                                
//                                     <button onClick={ ()=> deleteMhs(mhs.id)} className="button is-small is-danger is-outlined ">Delete</button>
                              
//                                 </td>
//                             </tr>
//                         ))}
//                 </tbody>
//         </table>
//         </div>
//         </div>
        
//         </div>

           
        
//     )

// }

// export default ListMhs;
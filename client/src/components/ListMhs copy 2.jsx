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
        
//         <section class="hero is-fullheight ungu">
//             <div class="container is-max-desktop">
//             <div class="notification is-primary">
//                 This container has a <code>max-width</code> of <code>$desktop - $container-offset</code> on widescreen and fullhd.
//             </div>
//             </div>
//         <div class="section is-medium">
          
//         {/* <div className="container"> */}
//         <div class="container is-medium">
//             <div class="buttons has-addons is-centered">
//             <Link to={"/add"} className="button is-primary mt-5">Tambah Data</Link>
//             </div>
//             {/* <table className="table is-striped is-fullwidth mt-5"></table> */}
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
//         </section>

           
        
//     )

// }

// export default ListMhs;
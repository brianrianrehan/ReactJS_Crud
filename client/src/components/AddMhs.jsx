import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line
import { Link } from "react-router-dom";


const AddMhs = () => {
    const [npm, setNpm] = useState('');
    const [nama,setNama] = useState('');
    const [kelas, setKelas] = useState('');
    const [kuis, setKuis] = useState('');
    const [uts, setUts] = useState('');
    const [uas, setUas] = useState('');
    const navigate = useNavigate();

    const saveMhs = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/mhs',{
            npm: npm,
            nama: nama,
            kelas: kelas,
            kuis: kuis,
            uts: uts,
            uas: uas,
        });
        navigate("/");
        } catch(error) {
            console.log(error)
        }
    }

    return (
        
        <div className="container is-centered mt-5">
            <form onSubmit={ saveMhs }>
            <div className="field">
                <label className="label">NPM</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="NPM" 
                    value={ npm } 
                    onChange={ (e) => setNpm(e.target.value)} />
            </div>

            <div className="field">
                <label className="label">Nama Lengkap</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Nama" 
                    value={ nama } 
                    onChange={ (e) => setNama(e.target.value)} />
            </div>

            <div className="field">
                <label className="label">Kelas</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Kelas" 
                    value={ kelas } 
                    onChange={ (e) => setKelas(e.target.value)} />
            </div>
            <div className="field">
                <label className="label">Nilai KUIS</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Nilai KUIS" 
                    value={ kuis } 
                    onChange={ (e) => setKuis(e.target.value)} />
            </div>
            <div className="field">
                <label className="label">Nilai UTS</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Nilai UTS" 
                    value={ uts } 
                    onChange={ (e) => setUts(e.target.value)} />
            </div>

            <div className="field">
                <label className="label">Nilai UAS</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Nilai UAS" 
                    value={ uas } 
                    onChange={ (e) => setUas(e.target.value)} />
            </div>

            <div className="field">
                <button type="submit" className="button is-primary">Save</button>
            </div>
            </form>
            <Link to={"/"} className="button is-info mt-2">Back</Link>
        </div>
    )
    
}
export default AddMhs
import { useEffect, useState } from "react";
import axios from "axios";
import Style from '../components/Styles.module.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';


const PersonalData = () =>{

    useEffect(() => {
        getData();
    },[])

    const [dados, setDados] = useState({});
    const [loading, setLoading] = useState([]);

    const getData = async () => {
        try{
            const response = await axios.get('https://api.github.com/users/buenosavio');
            setDados(response.data)
            setLoading(Object.keys(response))
        } catch (err) {
            alert('Houve um erro ao carregar os dados!', err)
        }
    }
      return (
          <>
          {loading ? (
            <>
          <h2 className={Style.center}>Hi, my name is {dados.name}...</h2>
          <div className={Style.profile}>
              <div>
                <img src={dados.avatar_url} alt=""/>
              </div>
              <div>
                <h2> {dados.name} </h2>
                <p> <FaMapMarkerAlt/> {dados.location}</p>
                <p> <MdWork /> {dados.company}</p>
              </div>                 
          </div>
          <div className={Style.aboutText}>
              <h2>who is this guy?</h2>
              <p>{dados.bio}</p>               
          </div>
          </>) : alert('nenhum dado encontrado')}
          </>
      )

}
export default PersonalData;
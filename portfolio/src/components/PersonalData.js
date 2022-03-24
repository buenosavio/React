import { useEffect, useState } from "react";
import axios from "axios";
import Style from '../components/Styles.module.css'

const PersonalData = () =>{

    useEffect(() => {
        getData();
    },[])

    const [dados, setDados] = useState([]);

    const getData = async () => {
        try{
            const response = await axios.get('https://api.github.com/users/buenosavio');
            setDados(response.data)

        } catch (err) {
            alert('Houve um erro ao carregar os dados!', err)
        }
    }
      return (
          <div className={Style.profile}>
              <div>
                <img src={dados.avatar_url} alt=""/>
              </div>
              <div>
                <h1> {dados.name} </h1>
                <h4> {dados.location} </h4>
                <h4> {dados.company} </h4>
              </div>
          </div>
      )

}
export default PersonalData;
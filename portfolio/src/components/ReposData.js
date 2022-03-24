import { useEffect, useState } from "react";
import axios from "axios";
import Style from '../components/Styles.module.css'
import Cards from "./Cards";

const ReposData = () =>{

    useEffect(() => {
        getData();
    },[])

    const [dados, setDados] = useState([]);

    const getData = async () => {
        try{
            const response = await axios.get('https://api.github.com/users/buenosavio/repos');
            setDados(response.data)
            console.log(response.data)

        } catch (err) {
            alert('Houve um erro ao carregar os dados!', err)
        }
    }
      return (
          <div >
              <ul className={Style.cards}>
              {dados.map((repos) =>
              ( 
                  <Cards id={repos.id} reposName={repos.name} description={repos.description} language={repos.language} url={repos.svn_url}/>
              )
              )}
              </ul>
              
          </div>
      )

}
export default ReposData;
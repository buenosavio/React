import { useEffect, useState } from "react";
import axios from "axios";
import Style from '../components/Styles.module.css'
import Cards from "./Cards";

const ReposData = () =>{

    useEffect(() => {
        getData();
    },[])

    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState([]);

    const getData = async () => {
        try{
            const {data} = await axios.get('https://api.github.com/users/buenosavio/repos');
            setDados(data)
            setLoading(Object.keys(data))
        } catch (err) {
            alert('Houve um erro ao carregar os dados!', err)
        }
    }
      return (
          <>
          {loading ? 
          (<>
            <div>
                <h2 className={Style.center}>My projects avaiable on GitHub</h2>
                <ul className={Style.cards}>
                {dados.map((repos) =>( 
                    <Cards key={repos.id} reposName={repos.name} description={repos.description} language={repos.language} url={repos.svn_url}/>
                ))}
                </ul>              
            </div>
          </>)
          : alert('Nehum dado encontrado!')}
        </>
      )
}
export default ReposData;
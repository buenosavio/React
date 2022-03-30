import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";


const Home = () => {
    const navigate = useNavigate()
    
    useEffect(()=>{
        const loginOk = localStorage.getItem('token')
        if (!loginOk) {
            navigate('/login')
        } 
    },[])

    return (
    <>
    <Header/>
    <h1> Home </h1>
    <Footer />
    </>    
    )
}

export default Home;
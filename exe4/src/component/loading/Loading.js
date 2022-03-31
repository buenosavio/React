import Footer from '../Footer'
import Header from '../Header'
import imgLoading from './loadingimg.gif'

function Loading() {
  return (
      <>
      <Header/>
        <img src={imgLoading}/>
        <h3>Loading...</h3>
      <Footer/>
      </>
  )
}

export default Loading
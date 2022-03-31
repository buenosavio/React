import Footer from '../Footer'
import Header from '../Header'
import imgError from './error.gif'

function Error() {
  return (
      <>
      <Header/>
        <img src={imgError}/>
        <h3>Error...</h3>
      <Footer/>
      </>
  )
}

export default Error
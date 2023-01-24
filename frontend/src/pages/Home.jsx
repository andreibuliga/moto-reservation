import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'

function Home({ children }) {
  return (
    <>
      <section className='heading'>
        <h1>Platforma de rezervari online ATV</h1>
        <p>Mai jos aveti afisate rezervarile efectuate in timp real</p>
      </section>

      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Creati o rezervare noua
      </Link>
    </>
  )
}

export default Home

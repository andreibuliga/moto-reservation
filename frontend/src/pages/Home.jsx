import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import TimeTable from '../components/TimeTable'

function Home() {
  const { user } = useSelector((state) => state.auth)
  const [product] = useState('atv1')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [setShowTimeTable] = useState(false)

  const handleDateClick = (value) => {
    setSelectedDate(value)
    setShowTimeTable(true)
  }

  return (
    <>
      <section className='heading'>
        <h1>Platforma de rezervari</h1>
        <p>Mai jos puteti efectua rezervari in timp real</p>
      </section>

      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Creati o rezervare noua
      </Link>

      {user && (user.isAdmin || user.isDeveloper) && (
        <Link to='/history' className='btn btn-block'>
          Vedeti Istoric Rezervari
        </Link>
      )}

      <section style={{ paddingBottom: '200px', paddingTop: '50px' }}>
        <form>
          <label htmlFor='product'>Vedeti Datele Disponbile</label>

          <div
            style={{
              position: 'relative',
              border: 'none',
              padding: '5px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '80%',
                justifyContent: 'space-around',
              }}
            >
              <TimeTable
                selectedDate={selectedDate}
                handleDateClick={handleDateClick}
                product={product}
              />
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Home

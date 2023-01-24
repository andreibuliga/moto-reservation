import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Platforma Rezervari ATV</Link> 
      </div>
      <ul>
        {/* de schimbat linkurile */}
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Delogare
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Logare
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Inregistrare
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header

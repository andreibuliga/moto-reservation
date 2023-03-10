import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth)
  const isAdmin = user.isAdmin
  const isDeveloper = user.isDeveloper
  if (user && (isAdmin || isDeveloper)) return children

  return <Navigate to='/login' />
}

export default AdminRoute

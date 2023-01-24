import axios from 'axios'

export const GET_BOOKINGS = 'GET_BOOKINGS'
export const BOOKINGS_ERROR = 'BOOKINGS_ERROR'

export const getBookings = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/bookings')
    dispatch({
      type: GET_BOOKINGS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: BOOKINGS_ERROR,
      payload: err.response.data,
    })
  }
}

export const checkBooking = (date) => async (dispatch) => {
  try {
    const res = await axios.post('/api/bookings/check', { date })
    return res.data.available
  } catch (err) {
    dispatch({
      type: BOOKINGS_ERROR,
      payload: err.response.data,
    })
  }
}

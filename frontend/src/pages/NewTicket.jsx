import { useState } from 'react'
import { useSelector } from 'react-redux'
import BackButton from '../components/BackButton'
import { InlineWidget } from 'react-calendly'

function NewTicket() {
  const { user } = useSelector((state) => state.auth)
  const [name] = useState(user.name.toString().replace(/\\"/g, '"'))
  const [email] = useState(user.email.toString().replace(/\\"/g, '"'))

  const [product, setProduct] = useState('ATV1')

  return (
    <>
      <BackButton />
      <section className='heading'>
        <h1>Creaza o rezervare noua</h1>
        <p>Completati formularul de mai jos</p>
      </section>

      <section className='form' style={{ paddingBottom: '200px' }}>
        <form>
          <div className='form-group'>
            <label htmlFor='product'>Model ATV</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='ATV1'>ATV CFMOTO CForce 450L E5 - 1</option>
              <option value='ATV2'>ATV CFMOTO CForce 450L E5 - 2</option>
              <option value='ATV3'>ATV CFMOTO CForce 450L E5 - 3</option>
              <option value='ATV4'>ATV CFMOTO CForce 450L E - 4</option>
              <option value='Bike2'>
                Bicicleta Electrica Nezter e-city Zagon - 1
              </option>
              <option value='Bike3'>
                Bicicleta Electrica Nezter e-city Zagon - 2
              </option>
            </select>
          </div>
          <div styles={{ position: 'relative' }}>
            {product === 'ATV1' && (
              <div
                style={{
                  position: 'relative',
                  border: '1px solid #e6e6e6',
                  borderRadius: '10px',
                  padding: '5px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    width: '200px',
                    height: '200px',
                    right: '0',
                    top: '0',
                    zIndex: 1,
                    borderRadius: '10px !important',
                  }}
                ></div>
                <InlineWidget
                  className='calendly'
                  url='https://calendly.com/andrei-buliga-dev/rezervare-atv-1'
                  prefill={{
                    email: email,
                    name: name,
                  }}
                  style={{ zIndex: 0 }}
                />
              </div>
            )}
            {product === 'ATV2' && (
              <div
                style={{
                  position: 'relative',
                  border: '1px solid #e6e6e6',
                  borderRadius: '10px',
                  padding: '5px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    width: '200px',
                    height: '200px',
                    right: '0',
                    top: '0',
                    zIndex: 1,
                    borderRadius: '10px !important',
                  }}
                ></div>
                <InlineWidget
                  className='calendly'
                  url='https://calendly.com/andrei-buliga-dev/rezervare-atv-2'
                  prefill={{
                    email: { email },
                    name: { name },
                  }}
                  style={{ zIndex: 0 }}
                />
              </div>
            )}
            {product === 'ATV3' && (
              <div
                style={{
                  position: 'relative',
                  border: '1px solid #e6e6e6 !important',
                  borderRadius: '10px !important',
                  padding: '5px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    width: '200px',
                    height: '200px',
                    right: '0',
                    top: '0',
                    zIndex: 1,
                    borderRadius: '10px !important',
                  }}
                ></div>
                <InlineWidget
                  className='calendly'
                  url='https://calendly.com/andrei-buliga-dev/rezervare-atv-3'
                  prefill={{
                    email: { email },
                    name: { name },
                  }}
                  style={{ zIndex: 0 }}
                />
              </div>
            )}
            {product === 'ATV4' && (
              <div
                style={{
                  position: 'relative',
                  border: '1px solid #e6e6e6 !important',
                  borderRadius: '10px !important',
                  padding: '5px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    width: '200px',
                    height: '200px',
                    right: '0',
                    top: '0',
                    zIndex: 1,
                    borderRadius: '10px !important',
                  }}
                ></div>
                <InlineWidget
                  className='calendly'
                  url='https://calendly.com/andrei-buliga-dev/rezervare-atv-4'
                  prefill={{
                    email: { email },
                    name: { name },
                  }}
                  style={{ zIndex: 0 }}
                />
              </div>
            )}
            {product === 'Bike1' && (
              <div
                style={{
                  position: 'relative',
                  border: '1px solid #e6e6e6 !important',
                  borderRadius: '10px !important',
                  padding: '5px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    width: '200px',
                    height: '200px',
                    right: '0',
                    top: '0',
                    zIndex: 1,
                    borderRadius: '10px !important',
                  }}
                ></div>
                <InlineWidget
                  className='calendly'
                  url='https://calendly.com/andrei-buliga-dev/rezervare-bike1'
                  prefill={{
                    email: { email },
                    name: { name },
                  }}
                  style={{ zIndex: 0 }}
                />
              </div>
            )}
            {product === 'Bike2' && (
              <div
                style={{
                  position: 'relative',
                  border: '1px solid #e6e6e6 !important',
                  borderRadius: '10px !important',
                  padding: '5px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    width: '200px',
                    height: '200px',
                    right: '0',
                    top: '0',
                    zIndex: 1,
                    borderRadius: '10px !important',
                  }}
                ></div>
                <InlineWidget
                  className='calendly'
                  url='https://calendly.com/andrei-buliga-dev/rezervare-bike2'
                  prefill={{
                    email: { email },
                    name: { name },
                  }}
                  style={{ zIndex: 0 }}
                />
              </div>
            )}
          </div>
        </form>
      </section>
    </>
  )
}

export default NewTicket

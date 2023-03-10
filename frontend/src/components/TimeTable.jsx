import { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Pagination from '@mui/material/Pagination'

function CustomPagination() {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <Pagination
      color='primary'
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}

const columns = [
  {
    field: 'date',
    headerName: 'Data Rezervarii',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    flex: 1,
    valueGetter: (params) =>
      params.row.date ? new Date(params.row.date).toLocaleDateString() : '',
    cellClassName: () => 'cell-center',
  },
  {
    field: 'startTime',
    headerName: 'Start Rezervare',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    flex: 1,
    cellClassName: () => 'cell-center',
  },
  {
    field: 'endTime',
    headerName: 'Sfarsit Rezervare',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    flex: 1,
    cellClassName: () => 'cell-center',
  },
]

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light'
      ? 'rgba(0,0,0,.85)'
      : 'rgba(255,255,255,0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light'
        ? 'rgba(0,0,0,.85)'
        : 'rgba(255,255,255,0.65)',
  },
  '& .MuiPaginationItem-root': {
    borderRadius: '50%',
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  '& .cell-center': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .MuiDataGrid-toolbarContainer': {
    justifyContent: 'center',
  },
}))

function TimeTable({ selectedDate }) {
  const [atvModel, setAtvModel] = useState('ATV1')
  const [selectedModelAvailability, setSelectedModelAvailability] = useState([])

  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    async function fetchAvailability() {
      try {
        if (atvModel && selectedDate) {
          const response = await axios.get(
            `/api/reservations?date=${selectedDate.toISOString()}&atvModel=${atvModel}`
          )
          setSelectedModelAvailability(response.data)
        } else {
          setSelectedModelAvailability([])
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchAvailability()
  }, [selectedDate, atvModel])

  const handleAtvModelChange = (event) => {
    setAtvModel(event.target.value)
  }

  const filteredAvailability = selectedModelAvailability
    .filter((availability) => availability.atvModel === atvModel)
    .filter((availability) => availability.date >= today)

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className='reservation-form'>
        <div className='form-group'>
          <label htmlFor='atv-model'>Model Vehicul</label>
          <select
            style={{
              height: '40px',
              border: '2px solid rgb(66, 165, 245)',
              borderRadius: '4px',
            }}
            name='atv-model'
            id='atv-model'
            value={atvModel}
            onChange={handleAtvModelChange}
          >
            <option value='ATV1'>ATV CFMOTO CForce 450L E5 - 1</option>
            <option value='ATV2'>ATV CFMOTO CForce 450L E5 - 2</option>
            <option value='ATV3'>ATV CFMOTO CForce 450L E5 - 3</option>
            <option value='ATV4'>ATV CFMOTO CForce 450L E5 - 4</option>
            <option value='BIKE1'>
              Bicicleta Electrica Neuzer e-city Zagon - 1
            </option>
            <option value='BIKE2'>
              Bicicleta Electrica Neuzer e-city Zagon - 2
            </option>
          </select>
        </div>
      </div>

      {atvModel && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <StyledDataGrid
            pagination
            pageSize={5}
            rowsPerPageOptions={[5]}
            style={{
              width: '100%',
            }}
            rows={filteredAvailability.map((availability) => ({
              id: uuidv4(),
              atvModel: availability.atvModel,
              date: availability.date,
              startTime: availability.startTime,
              endTime: availability.endTime,
            }))}
            columns={columns}
            autoHeight
            getRowClassName={(params) => {
              return params.rowIndex % 2 === 0 ? 'blue-row' : ''
            }}
            getRowId={(row) => row.id}
            components={{
              Pagination: CustomPagination,
            }}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: 'primary.light',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}
          />
        </div>
      )}
    </div>
  )
}

export default TimeTable

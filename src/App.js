import { useState, useEffect } from 'react'
import axios from 'axios'
import GlobalStyles from '@mui/material/GlobalStyles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import PokeDex from './PokeDex'

function App() {
  const [types, setTypes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000').then((res) => setTypes(res.data))
  }, [])

  return (
    <Container>
      <GlobalStyles styles={{ body: { backgroundColor: '#f5f5f5' } }} />
      <Typography variant="h1" align="center" sx={{ my: 5 }}>
        Catch Em All!
      </Typography>
      <PokeDex types={types} />
    </Container>
  )
}

export default App

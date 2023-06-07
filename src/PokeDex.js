import { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import PokeCard from './PokeCard'

export default function PokeDex({ types }) {
  const [picked, setPicked] = useState('')
  const [pokemon, setPokemon] = useState([''])
  const [reset, setReset] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api?type=${picked}`)
      .then((res) => setPokemon(res.data))
  }, [picked])

  const handleChange = (event) => {
    setPicked(event.target.value)
    setReset(true)
  }

  return (
    <>
      <Box>
        <FormControl fullWidth>
          <Select value={picked} onChange={handleChange}>
            {types.map((p) => (
              <MenuItem key={p} value={p}>
                {' '}
                {p}{' '}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {picked && (
        <Grid container spacing={4} sx={{ marginTop: '5vh' }}>
          {pokemon.map((p, index) => {
            return (
              <Grid item xs={12} md={4} lg={3} key={index}>
                <PokeCard pokemon={p} reset={reset} setReset={setReset} />
              </Grid>
            )
          })}
        </Grid>
      )}
    </>
  )
}

import { useEffect, useState } from 'react'
import { getThumbs, setColorByType } from './helpers.js'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'

export default function PokeCard({ pokemon }) {
  const [expanded, setExpanded] = useState(false)
  const pokeName = { ...pokemon.name }
  const types = pokemon.type
  const { HP, Attack, Defense, Speed } = { ...pokemon.base }

  useEffect(() => {
    setExpanded(false)
  }, [pokemon])

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      elevation={1}
      onClick={toggleExpanded}
      sx={{
        '&:hover': {
          boxShadow: 9,
          border: '6px inset #757575',
        },
        border: '6px inset #bdbdbd',
        backgroundColor: '#fafafa',

      }}
    >
      <Typography
        variant="h5"
        sx={{
          px: 1,
     
        }}
      >
        {pokeName.english}
      </Typography>

      <CardContent

      >
        <Box sx={{ backgroundColor: 'white' }}>
        <CardMedia
          component="img"
          image={getThumbs(pokemon.id)}
          sx={{ width: !expanded ? '40%' : '90%', mx: 'auto', py: 2 }}
          alt={pokeName.english}
        />
        </Box>

        <Collapse in={expanded}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}> <span>Hit points</span> <span>{HP}</span></Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> <span>Attack</span> <span>{Attack}</span></Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> <span>Defense</span> <span>{Defense}</span></Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> <span>Speed</span> <span>{Speed}</span></Box>
        </Collapse>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <Box>
            {types.map((t) => {
              return (
                <Typography
                  variant="caption"
                  component="span"
                  key={t}
                  sx={{
                    backgroundColor: setColorByType(t),
                    padding: 0.5,
                    marginRight: 0.5,
                  }}
                >
                  {t}{' '}
                </Typography>
              )
            })}
          </Box>

          <Typography
            variant="caption"
            component="span"
            sx={{
              textAlign: 'center',
              height: '25px',
              width: '25px',
              borderRadius: '50%',
              color: 'white',
              backgroundColor: '#424242',
            }}
          >
            {pokemon.id}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}



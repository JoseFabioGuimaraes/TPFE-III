import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material'

const url = "http://localhost:3000/noticias"

const NoticiasAxios = () => {

  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url)
        setNoticias(res.data)
      } catch (error) {
        console.error("Erro ao buscar as notícias: ", error)
      }
    }
    fetchData()
  }, [])

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>Notícias</Typography>
      <List>
        {
          noticias.map((noticia) => (
            <ListItem key={noticia.id} component={Paper} elevation={3} sx={{ mb: 2 }}>
              <ListItemText
                primary={
                  <Typography variant="h5" component={Link} to={`/visualiza-noticia/${noticia.id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                    {noticia.titulo}
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle1">
                    {noticia.subtitulo}
                  </Typography>
                }
              />
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default NoticiasAxios
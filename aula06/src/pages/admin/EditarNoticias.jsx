import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {Button, TextField, Typography, Box} from '@mui/material'

const url= 'http://localhost:3000/noticias'

const EditarNoticias = () => {

    const {id} = useParams()

    const [titulo, setTitulo] = useState("")
    const [subtitulo, setSubtitulo] = useState("")
    const [texto, setTexto] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`${url}/${id}`)
            setTitulo(res.data.titulo)
            setSubtitulo(res.data.subtitulo)
            setTexto(res.data.texto)
          } catch (error) {
            console.error("Erro ao buscar a notícia: ", error)
          }
        }
        fetchData()
      }, [id])
    
      const editarNoticia = async (e) => {
        e.preventDefault()
        try {
          await axios.put(`${url}/${id}`, { titulo, subtitulo, texto })
          navigate('/admin-noticias')
        } catch (error) {
          console.error("Erro ao editar a notícia: ", error)
        }
      }

  return (
    <Box component="form" onSubmit={editarNoticia} noValidate sx={{ mt: 3 }}>
    <Typography variant="h4" gutterBottom>Editar Notícia</Typography>
    <TextField
      label="Título"
      fullWidth
      margin="normal"
      value={titulo}
      onChange={(e) => setTitulo(e.target.value)}
    />
    <TextField
      label="Subtítulo"
      fullWidth
      margin="normal"
      value={subtitulo}
      onChange={(e) => setSubtitulo(e.target.value)}
    />
    <TextField
      label="Texto"
      fullWidth
      multiline
      rows={4}
      margin="normal"
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
    />
    <Button type="submit" variant="contained" color="primary">
      Salvar
    </Button>
  </Box>
  )
}

export default EditarNoticias
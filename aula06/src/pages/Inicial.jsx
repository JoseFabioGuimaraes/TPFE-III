import React from 'react'
import { Box, Typography, Paper, Grid } from '@mui/material'

const Inicial = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>Bem-vindo à Faculdade UNIESP</Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Sobre a Faculdade</Typography>
        <Typography variant="body1">
          A Faculdade UNIESP é uma instituição de ensino superior comprometida com a formação de profissionais qualificados para o mercado de trabalho. 
          Oferecemos uma ampla gama de cursos de graduação e pós-graduação, com uma infraestrutura moderna e professores altamente qualificados.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Nosso Curso</Typography>
        <Typography variant="body1">
          O curso de Arquitetura de Computadores da UNIESP é reconhecido pela sua excelência acadêmica e por preparar os alunos para os desafios do mundo tecnológico. 
          O curso aborda tópicos avançados em hardware e software, proporcionando uma base sólida para uma carreira de sucesso na área de tecnologia.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Notícias</Typography>
            <Typography variant="body1">
              Fique atualizado com as últimas notícias e eventos da UNIESP. Nossa seção de notícias traz informações sobre palestras, workshops, 
              publicações acadêmicas e muito mais. Acesse a página de notícias para saber mais.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Área Administrativa</Typography>
            <Typography variant="body1">
              Acesse a área administrativa para gerenciar as notícias e eventos da faculdade. Esta seção é destinada a administradores e permite 
              a criação, edição e exclusão de notícias. Certifique-se de ter as permissões adequadas antes de acessar.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Inicial
import React from 'react'
import { Box, Typography, Paper, Grid } from '@mui/material'

const Afaculdade = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>Sobre a Faculdade UNIESP</Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Missão e Visão</Typography>
        <Typography variant="body1">
          Nossa missão é proporcionar uma educação de alta qualidade que prepare os alunos para os desafios do mercado de trabalho e para a vida em sociedade. 
          Visamos ser uma referência em ensino superior, reconhecida pela excelência acadêmica, inovação e compromisso com o desenvolvimento sustentável.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Infraestrutura</Typography>
        <Typography variant="body1">
          A Faculdade UNIESP conta com uma infraestrutura moderna e equipada para oferecer a melhor experiência de aprendizado aos nossos alunos. 
          Temos laboratórios de última geração, bibliotecas com acervo atualizado, salas de aula confortáveis e áreas de convivência que promovem a interação e o bem-estar dos estudantes.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Cursos Oferecidos</Typography>
        <Typography variant="body1">
          Oferecemos uma ampla gama de cursos de graduação e pós-graduação em diversas áreas do conhecimento, incluindo:
          <ul>
            <li>Administração</li>
            <li>Direito</li>
            <li>Engenharia de Computação</li>
            <li>Arquitetura e Urbanismo</li>
            <li>Ciências Contábeis</li>
            <li>Psicologia</li>
            <li>Sistemas de Informação</li>
          </ul>
          Nossos cursos são projetados para fornecer uma base sólida de conhecimentos teóricos e práticos, preparando os alunos para uma carreira de sucesso.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Programas de Extensão</Typography>
        <Typography variant="body1">
          A UNIESP oferece diversos programas de extensão que complementam a formação acadêmica dos nossos alunos. 
          Esses programas incluem projetos de pesquisa, atividades culturais, cursos de idiomas, e ações comunitárias que visam promover a responsabilidade social e o desenvolvimento integral dos estudantes.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Contato</Typography>
        <Typography variant="body1">
          Para mais informações sobre a Faculdade UNIESP, entre em contato conosco:
          <ul>
            <li>Email: contato@uniesp.edu.br</li>
            <li>Telefone: (11) 1234-5678</li>
            <li>Endereço: Rua da Educação, 123, São Paulo, SP</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  )
}

export default Afaculdade
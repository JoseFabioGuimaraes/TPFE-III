import React from 'react'
import { Box, Typography, Paper } from '@mui/material'

const DpoLgpd = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>LGPD e o Papel do DPO</Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>O que é a LGPD?</Typography>
        <Typography variant="body1">
          A Lei Geral de Proteção de Dados (LGPD) é uma legislação brasileira que regula as atividades de tratamento de dados pessoais e que visa proteger os direitos fundamentais de liberdade e privacidade. 
          A LGPD estabelece regras claras sobre a coleta, armazenamento, tratamento e compartilhamento de dados pessoais, com o objetivo de garantir a privacidade e a segurança das informações dos cidadãos.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>O Papel do DPO</Typography>
        <Typography variant="body1">
          O Data Protection Officer (DPO) é o profissional responsável por garantir que a organização esteja em conformidade com a LGPD. 
          As responsabilidades do DPO incluem a implementação de políticas de proteção de dados, a realização de auditorias de conformidade, a capacitação de funcionários e a atuação como ponto de contato entre a organização e a Autoridade Nacional de Proteção de Dados (ANPD).
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Importância da LGPD</Typography>
        <Typography variant="body1">
          A implementação da LGPD é crucial para proteger a privacidade dos indivíduos e para assegurar que as empresas tratem os dados pessoais de forma transparente e segura. 
          A conformidade com a LGPD não só evita penalidades legais, mas também fortalece a confiança dos consumidores na organização.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Como a UNIESP se Adequa à LGPD</Typography>
        <Typography variant="body1">
          Na UNIESP, levamos a privacidade e a proteção dos dados muito a sério. Temos políticas e procedimentos rigorosos em vigor para assegurar que todos os dados pessoais sejam tratados de acordo com a LGPD. 
          Nosso DPO está sempre disponível para responder a quaisquer dúvidas e garantir que nossa instituição continue em conformidade com todas as normas de proteção de dados.
        </Typography>
      </Paper>
    </Box>
  )
}

export default DpoLgpd
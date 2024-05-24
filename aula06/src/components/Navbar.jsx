import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Home
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/a-faculdade">A Faculdade</Button>
          <Button color="inherit" component={Link} to="/dpo-lgpd">DPO LGPD</Button>
          <Button color="inherit" component={Link} to="/noticias">Notícias</Button>
          <Button color="inherit" component={Link} to="/admin-noticias">Admin</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
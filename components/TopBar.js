import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { AppBar, Box, IconButton, Toolbar, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default class TopBar extends Component {
  //static propTypes = {second: third}

  render() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Optimise Prime
            </Typography>
            <Button color="inherit">
              Export
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

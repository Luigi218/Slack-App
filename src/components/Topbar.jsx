import React from 'react';
import { Grid, AppBar, Toolbar, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
  return (
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Search messages"
              style={{
                backgroundColor: 'white',
                borderRadius: '5px',
                paddingLeft: '10px',
                width: '250px',
              }}
            />
            <IconButton
              color="inherit"
              size="small"
              style={{ position: 'absolute', right: '5px' }}
            >
              <SearchIcon />
            </IconButton>
          </div>
   
  );
}

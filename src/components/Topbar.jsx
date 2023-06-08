import React from 'react';
import { Grid, AppBar, Toolbar, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar( {userId} ) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ height: 'auto' }}>
      <p>
        <span role="img" aria-label="Waving Hand" style={{ fontSize: '2rem' }}>👋</span> 
        <span style={{ color: 'black' }}>Hi User </span>
        <span style={{ color: '#A44CD3' }}>{userId}</span>
        <span style={{ color: 'black' }}>!</span>
      </p>
    </div>
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
      <InputBase
        placeholder="Search messages"
        style={{
          backgroundColor: 'white',
          borderRadius: '5px',
          paddingLeft: '10px',
          width: '350px',
          border: '1px black solid',
          height: '40px',
          marginRight: '10px', // Add margin to create space for the icon
        }}
      />
      <IconButton color="inherit" size="small" style={{ width: '10px' }}>
        <SearchIcon />
      </IconButton>
    </div>
  </div>
  );
}

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function DirectMessages() {
  return (
    <>
      <Accordion style={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontFamily: 'Geologica, sansSerif',
              fontWeight: 'bold',
            }}
          >
            Direct messages
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SearchIcon style={{ marginRight: '8px' }} />
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Search user"
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
}

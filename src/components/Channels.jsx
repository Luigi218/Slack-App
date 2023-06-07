import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function Channels() {
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
            Channels
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            variant="contained"
            startIcon={<AddIcon style={{color: 'white'}} />}
            style={{
              fontFamily: 'Geologica, sansSerif',
              backgroundColor: '#3F0E40',
              color: 'white',
            }}
          >
            Add Channels
          </Button>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

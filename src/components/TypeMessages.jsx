import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

export default function TypeMessages() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the message submission logic here
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={12}>
        <Grid container spacing={1} justifyContent="space-between" alignItems="center">
          <Grid item style={{display: 'flex'}}>
            <Button size="small" color="inherit"><FormatBoldIcon /></Button>
            <Button size="small" color="inherit"><FormatItalicIcon /></Button>
            <Button size="small" color="inherit"><FormatUnderlinedIcon /></Button>
          </Grid>
          <Grid item xs={10}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Type a message"
            />
          </Grid>
          <Grid item style={{display: 'flex'}}>
            <Button size="small" color="inherit"><KeyboardArrowUpIcon /></Button>
            <Button size="small" color="inherit"><KeyboardArrowDownIcon /></Button>
            <Button size="small" color="inherit"><EmojiEmotionsIcon /></Button>
            <Button type="submit" variant="contained" color="primary" style={{  backgroundColor: '#3F0E40',}}>
              <SendIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

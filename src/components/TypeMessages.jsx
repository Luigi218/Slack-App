import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

export default function TypeMessages({ loginHeader, setTypeMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTypeMessage(message)

    const response = await fetch('http://206.189.91.54/api/v1/messages', {
      method: 'POST',
      body: JSON.stringify({
        receiver_id: 3643,
        receiver_class: 'User',
        body: message,
      }),
      headers: {
        ...loginHeader,
      },
    });
  
    if (response.ok) {
      const messageData = await response.json();
      console.log(messageData);
      setMessage(''); // Clear the input field
    } else {
      // Error occurred while sending the message
      console.error('Error sending message:', response.statusText);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="space-between" alignItems="center">
            <Grid item style={{ display: 'flex' }}>
              <Button size="small" color="inherit">
                <FormatBoldIcon />
              </Button>
              <Button size="small" color="inherit">
                <FormatItalicIcon />
              </Button>
              <Button size="small" color="inherit">
                <FormatUnderlinedIcon />
              </Button>
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item style={{ display: 'flex' }}>
              <Button size="small" color="inherit">
                <KeyboardArrowUpIcon />
              </Button>
              <Button size="small" color="inherit">
                <KeyboardArrowDownIcon />
              </Button>
              <Button size="small" color="inherit">
                <EmojiEmotionsIcon />
              </Button>
              <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#3F0E40' }}>
                <SendIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
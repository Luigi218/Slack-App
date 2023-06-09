import React, { useEffect, useState } from 'react';
import { Button, Box, Modal, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function MessagesBody({ loginHeaders, selectedChannelName }) {
  const [channelName, setChannelName] = useState('');
  const [open, setOpen] = useState(false);
  const [memberId, setMemberId] = useState('');
  console.log(selectedChannelName)
  useEffect(() => {
    // Fetch channel details when component mounts
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    try {
      const response = await fetch('http://206.189.91.54/api/v1/channels/3', {
        method: 'GET',
        headers: {
          ...loginHeaders,
        },
      });

      if (response.ok) {
        const channelData = await response.json();
        setChannelName(channelData.name);
      } else {
        console.error('Error retrieving channel details:', response.statusText);
      }
    } catch (error) {
      console.error('Error retrieving channel details:', error);
    }
  };

  const handleAddMember = async () => {
    try {
      const response = await fetch('http://206.189.91.54/api/v1/channel/add_member', {
        method: 'POST',
        body: JSON.stringify({
          id: 4649, // Replace with the appropriate channel ID
          member_id: memberId, // Use the entered member ID
        }),
        headers: {
          ...loginHeaders,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const addData = await response.json();
        console.log(addData);
        console.log('Member added successfully!');
        // Perform any necessary actions or updates upon successful addition of a member
      } else {
        console.error('Error adding member:', response.statusText);
        // Handle error case if the member addition fails
      }
    } catch (error) {
      console.error('Error adding member:', error);
      // Handle any network or other errors that occur during the API call
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <h2>{selectedChannelName}</h2>
      <Button
        variant="contained"
        size="small"
        startIcon={<PersonAddIcon style={{ color: 'white' }} />}
        onClick={handleOpen}
        style={{ width: 'fit-content', backgroundColor: '#A44CD3' }}
      >
        Add Member
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            p: 4,
            outline: 'none',
            borderRadius: '8px',
          }}
        >
          <h2>Add Member</h2>
          <TextField
            autoFocus
            margin="dense"
            label="Member ID"
            fullWidth
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
          />
          <Button onClick={handleAddMember} variant="contained" style={{ marginTop: '16px' }}>
            Add Member
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

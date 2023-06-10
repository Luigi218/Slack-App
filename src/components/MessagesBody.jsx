import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LockIcon from '@mui/icons-material/Lock';
import './MessagesBody.css';

export default function MessagesBody({ loginHeaders, selectedChannel, selectedChannelId }) {
  const [openAddMember, setOpenAddMember] = useState(false);
  const [openChannelDetails, setOpenChannelDetails] = useState(false);
  const [memberId, setMemberId] = useState('');
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    const getChannelDetails = async () => {
      try {
        const response = await fetch(`http://206.189.91.54/api/v1/channels/${selectedChannelId}`, {
          method: 'GET',
          headers: {
            ...loginHeaders,
          },
          params: {
            id: selectedChannelId,
          },
        });

        if (response.ok) {
          const channelData = await response.json();
          setChannelDetails(channelData);
        } else {
          console.error('Error fetching channel details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching channel details:', error);
      }
    };

    getChannelDetails();
  }, [selectedChannelId, loginHeaders]);

  const handleAddMember = async () => {
    try {
      const response = await fetch('http://206.189.91.54/api/v1/channel/add_member', {
        method: 'POST',
        body: JSON.stringify({
          id: selectedChannelId,
          member_id: memberId,
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
      } else {
        console.error('Error adding member:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  const handleOpenAddMember = () => {
    setOpenAddMember(true);
  };

  const handleCloseAddMember = () => {
    setOpenAddMember(false);
  };

  const handleOpenChannelDetails = () => {
    setOpenChannelDetails(true);
  };

  const handleCloseChannelDetails = () => {
    setOpenChannelDetails(false);
  };

  return (
    <Box className="messages-body">
      <div className="channel-header" onClick={handleOpenChannelDetails}>
        {selectedChannel && (
          <span className="channel-name">
            <LockIcon className="lock-icon" />
            {selectedChannel}
          </span>
        )}
      </div>
      <Button
        variant="contained"
        size="small"
        startIcon={<PersonAddIcon style={{ color: 'white' }} />}
        onClick={handleOpenAddMember}
        style={{ width: 'fit-content', backgroundColor: '#A44CD3' }}
      >
        Add Member
      </Button>
      <Modal open={openAddMember} onClose={handleCloseAddMember}>
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
      <Modal open={openChannelDetails} onClose={handleCloseChannelDetails}>
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
          {channelDetails && (
            <>
              <h2>Channel Details</h2>
              <p>Channel Name: {channelDetails.data.name}</p>
              <p>Channel ID: {channelDetails.data.id}</p>
              <p>Channel Owner: {channelDetails.data.owner_id}</p>
              <p>Channel Members:</p>
              <ul>
                {channelDetails.data.channel_members && channelDetails.data.channel_members.map((member) => (
                  <li key={member.id}>{member.user_id}</li>
                ))}
              </ul>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

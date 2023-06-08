import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import './Channels.css';

export default function Channels({ loginHeaders }) {
  const [channelName, setChannelName] = useState('');
  const [userIds, setUserIds] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetchChannels();
  }, []);

  const fetchChannels = async () => {
    const response = await fetch('http://206.189.91.54/api/v1/channels', {
      headers: {
        ...loginHeaders,
      },
    });

    if (response.ok) {
      const channelData = await response.json();
      if (Array.isArray(channelData.data)) {
        setChannels(channelData.data);
      } else {
        console.error('Invalid channel data');
      }
    } else {
      console.error('Error fetching channels');
    }
  };

  const handleAddChannel = async () => {
    const response = await fetch('http://206.189.91.54/api/v1/channels', {
      method: 'POST',
      body: JSON.stringify({
        name: channelName,
        user_ids: [userIds],
      }),
      headers: {
        'Content-Type': 'application/json',
        ...loginHeaders,
      },
    });

    if (response.ok) {
      const channelData = await response.json();
      if (Array.isArray(channelData.channels)) {
        setChannels(channelData.channels);
      } else {
        console.error('Invalid channel data');
      }
      closeModal();
    } else {
      console.error('Error creating channel');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset the input fields
    setChannelName('');
    setUserIds('');
  };

  return (
    <div className='channels-container'>
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="contained"
              startIcon={<AddIcon style={{ color: 'white' }} />}
              style={{
                fontFamily: 'Geologica, sansSerif',
                backgroundColor: '#3F0E40',
                color: 'white',
              }}
              onClick={openModal}
            >
              Add Channel
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="add-channel-modal-title"
        aria-describedby="add-channel-modal-description"
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '16px',
            outline: 'none',
            borderRadius: '4px',
          }}
        >
          <Typography variant="h6" id="add-channel-modal-title">
            Add Channel
          </Typography>
          <form>
            <TextField
              label="Channel Name"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="User IDs (comma-separated)"
              value={userIds}
              onChange={(e) => setUserIds(e.target.value)}
              fullWidth
              margin="normal"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" onClick={handleAddChannel}>
                Add
              </Button>
              <Button variant="contained" onClick={closeModal}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      <div>
        {channels.map((channel) => (
          <div key={channel.id} className="channel">
            <LockIcon style={{ marginRight: '8px', fontSize: '18px', color: '#A44CD3' }} />
            {channel.name}
          </div>
        ))}
      </div>
    </div>
  );
}

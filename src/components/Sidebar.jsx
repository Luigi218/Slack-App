import React from 'react';
import { Button } from '@mui/material';
import Icon from '../components/img/Icon.png';
import ForumIcon from '@mui/icons-material/Forum';
import ChatIcon from '@mui/icons-material/Chat';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function Sidebar() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <img src={Icon} style={{ width: '40px', height: '40px', paddingTop: '13px' }} alt="Icon" />
        <div style={{ paddingLeft: '10px' }}>
          <p style={{ fontWeight: 'bolder' }}>Slack Clone</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '50px', width: '300px' }}>
        <Button
          variant="text"
          color="secondary"
          size="small"
          startIcon={<ForumIcon color="secondary" />}
          style={{ fontWeight: 'bold', fontFamily: 'Geologica, sansSerif', justifyContent: 'flex-start' }}
        >
          Threads
        </Button>
        <Button
          variant="text"
          color="secondary"
          size="small"
          startIcon={<ChatIcon color="secondary" />}
          style={{ fontWeight: 'bold', fontFamily: 'Geologica, sansSerif', justifyContent: 'flex-start' }}
        >
          Mentions and reactions
        </Button>
        <Button
          variant="text"
          color="secondary"
          size="small"
          startIcon={<DraftsIcon color="secondary" />}
          style={{ fontWeight: 'bold', fontFamily: 'Geologica, sansSerif', justifyContent: 'flex-start' }}
        >
          Drafts and sent
        </Button>
      </div>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './DirectMessages.css'; // Import custom CSS file for styling

export default function DirectMessages({ loginHeaders }) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://206.189.91.54/api/v1/users', {
          headers: {
            'access-token': loginHeaders['access-token'],
            client: loginHeaders.client,
            expiry: loginHeaders.expiry,
            uid: loginHeaders.uid,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          if (Array.isArray(data.data)) {
            setUsers(data.data); // Access the `users` array inside `data`
          } else {
            setError('Invalid user data');
          }
        } else {
          setError('Failed to fetch users');
        }
      } catch (error) {
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, [loginHeaders]);

  useEffect(() => {
    const filterUsers = () => {
      if (searchTerm.length >= 4) {
        const filtered = users.filter(
          user =>
            user &&
            user.uid &&
            user.uid.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
      } else {
        setFilteredUsers([]);
      }
    };

    filterUsers();
  }, [users, searchTerm]);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
    setSelectedUser(null); // Clear selected user when search term changes
  };

  const handleUserClick = user => {
    setSelectedUser(user);
  };

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
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </AccordionDetails>
      </Accordion>
      {error && <p>{error}</p>}
      <div className="user-list">
        <ul>
          {filteredUsers.map(user => (
            <li
              key={user.id}
              className={
                selectedUser && selectedUser.id === user.id
                  ? 'selected-user'
                  : ''
              }
              onClick={() => handleUserClick(user)}
            >
              {user.uid}
            </li>
          ))}
        </ul>
      </div>
      {selectedUser && (
        <div className="selected-user-info">
          <h3>Selected User:</h3>
          <p>{selectedUser.uid}</p>
        </div>
      )}
    </>
  );
}

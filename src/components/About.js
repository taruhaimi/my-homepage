import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone'; 
import EmailIcon from '@mui/icons-material/AlternateEmail'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import GithubIcon from '@mui/icons-material/GitHub'; 
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import Link from '@mui/material/Link';

// import { Icon } from '@mui/material';

const About = () => {
  return (
    <div>
        <h1>This is about page</h1>

        <Divider/>
        <div>
            <h2>Contact information</h2>
            <List>
                <ListItem>
                <ListItemIcon>
                    <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="+358 45 150 8777" />
                </ListItem>

                <ListItem>
                <ListItemIcon> <EmailIcon /></ListItemIcon>
                <Link href="mailto:taru.haimi@hotmail.fi">
                    <ListItemText primary="taru.haimi@hotmail.fi"></ListItemText>
                </Link>
                </ListItem>
                
                <ListItem>
                <ListItemIcon> <LinkedInIcon /> </ListItemIcon>
                <Link href="https://www.linkedin.com/in/taruhaimi/" target="_blank" rel="noopener noreferrer">
                    <ListItemText primary="linkedin.com/taruhaimi"></ListItemText>
                </Link>
                </ListItem>

                <ListItem>
                <ListItemIcon> <GithubIcon /> </ListItemIcon>
                <Link href="https://github.com/taruuwws" target="_blank" rel="noopener noreferrer">
                    <ListItemText primary="github.com/taruhaimi"></ListItemText>
                </Link>
                </ListItem>

            </List>
        </div>

    </div>
  );
};

export default About;
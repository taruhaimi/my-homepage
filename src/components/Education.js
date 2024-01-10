import React from 'react';
import SchoolIcon from '@mui/icons-material/School'; 
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// import { Icon } from '@mui/material';

const About = () => {
  return (
    <div>
        <h1>This is education page</h1>

        <Divider/>
        <div>
            <h2>Educational background</h2>
            <List>
                <ListItem>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                {/* <ListItemText primary="M.Sc. Student at LUT University" /> */}
                <ListItemText>
                    <Typography variant="h6">
                    M.Sc. Student in Computer Vision and Pattern Recognition
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    Data-Centric Engineering, LUT School of Engineering Science
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    LUT University
                    </Typography>
                </ListItemText>
                </ListItem>

                <ListItem>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="h6">
                    B.Sc. in Data Analytics, 2022
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    Computational Engineering, LUT School of Engineering Science
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    LUT University
                    </Typography>
                </ListItemText>
                </ListItem>

                <ListItem>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="h6">
                    Matriculation Examination, 2019
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    Kouvolan Yhteislyseo
                    </Typography>
                </ListItemText>
                </ListItem>



            </List>
        </div>

    </div>
  );
};

export default About;
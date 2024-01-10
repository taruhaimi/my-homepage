import React from 'react';
import WorkIcon from '@mui/icons-material/Work'; 
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

const About = () => {
    // Example data for working experience and other experience
    const workingExperience = [
      {
        icon: <WorkIcon />,
        title: 'Software Developer',
        organization: 'Finnos Oy',
        date: '2022 - Present',
      },
      {
        icon: <WorkIcon />,
        title: 'Part-time teacher',
        organization: 'LUT University',
        date: '2020-2022',
      },
      {
        icon: <WorkIcon />,
        title: 'Junior Research Assistant',
        organization: 'LUT University',
        date: 'Summer 2021',
      },
      {
        icon: <WorkIcon />,
        title: 'Peer tutor',
        organization: 'LUT University',
        date: '2020',
      },
      {
        icon: <WorkIcon />,
        title: 'Cafe and Exhibition worker',
        organization: 'Vuohijärven luonto- ja kulttuuritalo',
        date: 'Summers 2017, 2018 & 2019',
      },
      // Add more working experience items
    ];
  
    const otherExperience = [
      {
        icon: <VolunteerActivismIcon />,
        title: "Member of LTKY's Section",
        organization: 'LTKY',
        date: '2024 - Present',
      },
      {
        icon: <VolunteerActivismIcon />,
        title: "Member of the Representative Council",
        organization: 'LTKY',
        date: '2023 - Present',
      },
      {
        icon: <VolunteerActivismIcon />,
        title: "Member of the Board",
        organization: 'SFMO ry',
        date: '2024 - Present',
      },
      {
        icon: <VolunteerActivismIcon />,
        title: "President of the Guild",
        organization: 'Lateksii ry',
        date: '2023',
      },
      {
        icon: <VolunteerActivismIcon />,
        title: "Member of the Board",
        organization: 'Lateksii ry',
        date: '2020 - 2022',
      },
      {
        icon: <VolunteerActivismIcon />,
        title: "Officer of the guild",
        organization: 'Lateksii ry',
        date: '2020 - Present',
      },
      // Add more other experience items
    ];
    const renderListItems = (items) => {
        let newHeight = Math.floor(100/items.length)
        return items.map((item, index) => (
          <ListItem key={index} style={{ height: newHeight+"%"}} >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {item.organization}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.date}
              </Typography>
            </ListItemText>
          </ListItem>
        ));
      };
    
      const splitIndexWork = Math.floor(workingExperience.length / 2);
      const splitIndexOther = Math.floor(otherExperience.length / 2);

      return (
        <div style={{ display: 'flex', height: "75%"}}>
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <div style = {{height:"100%"}}>
              <h2>Working Experience - Left Side</h2>
              <List style = {{height:"100%"}}>{renderListItems(workingExperience.slice(0, splitIndexWork))}</List>
            </div>
          </div>
    
          <div style={{ flex: 1, paddingLeft: '20px' }}>
            <div  style = {{height:"100%"}}>
              <h2>Other experience - Right Side</h2>
              <List  style = {{height:"100%"}}>{renderListItems(workingExperience.slice(splitIndexWork))}</List>
            </div>
          </div>


          <div style={{ flex: 1, paddingRight: '20px' }}>
            <div  style = {{height:"100%"}}>
              <h2>Working Experience - Left Side</h2>
              <List  style = {{height:"100%"}}>{renderListItems(otherExperience.slice(0, splitIndexOther))}</List>
            </div>
          </div>
    
          <div style={{ flex: 1, paddingLeft: '20px' }}>
            <div  style = {{height:"100%"}}>
              <h2>Other experience - Right Side</h2>
              <List  style = {{height:"100%"}}>{renderListItems(otherExperience.slice(splitIndexOther))}</List>
            </div>
          </div>

        </div>
        
      );
    };
    


export default About;
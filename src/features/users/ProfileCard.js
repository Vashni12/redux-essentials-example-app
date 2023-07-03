import React from 'react';
import {Card} from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {CardMedia} from '@material-ui/core';
import {Typography} from '@material-ui/core';

export const ProfileCard = ({profile}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        height="175"
        src ='./imgs/place.jpg'
        alt="place holder"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          @{profile.username}
        </Typography>
      </CardContent>
    </Card>
  );
}
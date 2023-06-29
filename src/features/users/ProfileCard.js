import React from 'react';
import {Card} from '@mui/material/core';
import {CardActions} from '@mui/material/core/CardActions';
import {CardContent} from '@mui/material/core/CardContent';
import {CardMedia} from '@mui/material/core/CardMedia';
import {Button} from '@mui/material/core/Button';
import {Typography} from '@mui/material/core/Typography';

export const ProfileCard = ({key,profile}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="place holder"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profile.username}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Published Posts</Button>
      </CardActions>
    </Card>
  );
}
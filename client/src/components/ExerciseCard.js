// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Stack, Typography } from '@mui/material';

// const ExerciseCard = ({ exercise }) => (
//   <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
//     <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
//     <Stack direction="row">
//       <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
//         {exercise.bodyPart}
//       </Button>
//       <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
//         {exercise.target}
//       </Button>
//     </Stack>
//     <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
//       {exercise.name}
//     </Typography>
//   </Link>
// );

// export default ExerciseCard;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function FirstLetterCap (arr) {
  const string = arr;
  const splitString = string.split(" ");

  for (var i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
  }

  const newString = splitString.join(" ");
  return newString
}

export default function ExerciseCard({exercise}) {
  const newTitle = FirstLetterCap(exercise.name);
  const newBodyPart = FirstLetterCap(exercise.bodyPart);
  const newMuscle = FirstLetterCap(exercise.target);

  return (
    <Card sx={{ width: 450 }}>
      <CardHeader sx={{textAlign: 'center'}}
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={newTitle}
      />
      <CardMedia
        component="img"
        height="400"
        image={exercise.gifUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Target Body Part: {newBodyPart}{<br/>}
          Target Muscle: {newMuscle}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
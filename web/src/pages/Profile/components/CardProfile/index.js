import React from 'react';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import {
  Avatar,
  Card,  
  CardContent,
  Typography
} from '@material-ui/core'
import {   
  FaRegEnvelope,
  FaPhone,
  FaDiscord
} from 'react-icons/fa';

import classes from './styles.module.css';

const useStyles = makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    height: 130,
    width:  130,
  }
}));

export default function CardProfile(){
  const stylesMUI = useStyles();
  return(
   <div className={classes.cardContainer}>
    <Card className={classes.rootProfile}>
        <CardContent>
          <div className={classes.avatar}>
              <Avatar className={stylesMUI.purple}>HM</Avatar>
          </div>
          <div className={classes.info}>
            kds
          </div>
        </CardContent>
    </Card>  
   </div>
)};
import React from 'react';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import {
  Avatar,
  Card,  
} from '@material-ui/core'
import {   
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';

import '../../../../global.css';
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
    <Card className={classes.rootProfile} style={{display: 'flex'}}>
        <div className={classes.avatar}>
            <Avatar className={stylesMUI.purple}>HM</Avatar>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.txtName}>
            Henrique Martins
          </p>
          <p className={classes.txtSpecialty}>
            (Backend Developer)
          </p>
          <button className={classes.button}>Contato</button>
        </div>
        <div class={classes.linhaVertical}></div>
        <div className={classes.contactContainer}>
           <div className={classes.contact}>
            <span className={classes.txtSpanTitle}>
              Disponibilidade: 
            </span>
            <span className={classes.txtSpan}>40h/semana</span>
          </div>
           <div className={classes.contact}>
            <span className={classes.txtSpanTitle}>
              Disponibilidade: 
            </span>
            <span className={classes.txtSpan}>40h/semana</span>
          </div>
          <div className={classes.contact}>
            <span className={classes.txtSpanTitle}>
              Disponibilidade: 
            </span>
            <span className={classes.txtSpan}>40h/semana</span>
          </div>
          <div className={classes.icons}>
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
    </Card>
   </div>
)};
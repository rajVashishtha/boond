import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
}));
const CssTextField = withStyles({
  root: {
    '& label':{
      color:"white"
    },
    '& label.Mui-focused': {
      color: "#467DE3",
       textShadow: "0 0 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "#71E35F",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#71E35F",
      },
      '&:hover fieldset': {
        borderColor: "#71E35F",
      },
      '&.Mui-focused fieldset': {
        borderColor: "#71E35F",
        textShadow:"0 0 150px #467DE3"
      },
    },
  },
})(TextField);


export default function InputTextField(props) {
  const classes = useStyles();
  const {type, label, variant, icon, width} = props;
  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item style={{
            paddingBottom:"5px"
          }}>
            {icon}
          </Grid>
          <Grid item>
            <CssTextField
            className={classes.margin}
            label={label}
            type={type}
            variant={variant}
            id={`${label}-text`}
            inputProps={{
              style:{
                width:`${width}`,
                color:`white !important`
              }
            }}
            {...props}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

InputTextField.propTypes = {
  type : PropTypes.string.isRequired,

};
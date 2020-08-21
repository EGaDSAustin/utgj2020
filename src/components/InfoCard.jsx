import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  image: {
    height: '250px',
    width: 'auto',
    marginBottom: '-20px',
  }
};

const InfoCard = (props) => {
  return (
    <div className="infoCard" padding='20px' align='center'>
        <img src={props.photo} alt={props.alt_text} style={styles.image}/>
        <Typography variant="h2" style={{marginBottom: '5px'}}>{props.category}</Typography>

        <Typography variant="subtitle1" style={{width: '60%'}}>{props.description}</Typography>
    </div>
    )
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoCard);

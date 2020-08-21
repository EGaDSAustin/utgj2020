import React from 'react';
import { Typography, Grid, Link } from '@material-ui/core'

// import Masonry from 'masonry-layout'

// sponsor logos
// import niantic from '../assets/sponsors/niantic.png'
import zynga from '../assets/sponsors/zynga.png'
// import riot from '../assets/sponsors/riot.png'
// import kabam from '../assets/sponsors/kabam.png'
// import ea from '../assets/sponsors/ea.png'
// import hoft from '../assets/sponsors/hoft.png'
import collage from '../assets/sponsors/sponsorcollage.png'

const styles = {
  container: {
    backgroundColor: '#a87de7',
    paddingBottom: '90px',
    paddingTop: '50px',
  },
  header: {
    paddingBottom: '30px',
    color: 'white'
  },
  description: {
    fontWeight: '400'
  },
  link: {
    color: '#ecb6ff',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
};

export class Sponsors extends React.Component {
  render() {
    return (
      // 771 - 370 / 2, 404 - 7
      <div style={styles.container} >
        <Typography variant="h2" style={styles.header}> Sponsors </Typography>
        <Typography variant="subtitle1" color="textSecondary" style={styles.description} > Interested in becoming a sponsor? </Typography>
        <Typography variant="subtitle1" color="textSecondary" style={styles.description}> <a href="mailto:texasegads@gmail.com" style={styles.link}>
          Contact us </a> for more information!
        </Typography >
        
        <Grid container spacing={0} style={{marginTop: '20px'}}>
          <Grid item xs={12}>
            <Link href="https://www.zynga.com/" target="_blank" rel="noopener">
              <img src={zynga} className="SponsorImg"/>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}
//<GameCard name={sponsor.name} img={sponsor.logo} link={sponsor.link} />
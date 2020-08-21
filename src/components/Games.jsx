import React from 'react';
import { Typography, Grid } from '@material-ui/core'
import './css/Games.css'
import GameCard from './GameCard'
import '../app.css'

// game images import
import pictureperfect from '../assets/games/pictureperfect.png'
import blockstar from '../assets/games/blockstar.gif'
import b_lock from '../assets/games/b-lock.png'
// import blockadventures from '../assets/games/blockadventures.png'
import junkyardbrawl from '../assets/games/junkyardbrawl.png'
// import littleblockers from '../assets/games/littleblockers.png'
import trashdash from '../assets/games/trashdash.png'
// import garbagegladiators from '../assets/games/garbagegladiators.png'
// import ascent from '../assets/games/ascent.png'
import trashteroids from '../assets/games/trashteroids.gif'
import tetrisblocker from '../assets/games/tetrisblocker.png'
// import ignite from '../assets/games/ignite.png'
import missionimpawsible from '../assets/games/missionimpawsible.png'
import deception from '../assets/games/deception.png'
// import impact from '../assets/games/impact.png'
// import swiffersadventure from '../assets/games/swiffersadventure.png'
import landfill from '../assets/games/landfill.png'
import trashketbrawl from '../assets/games/trashketbrawl.png'
// import illegalaliens from '../assets/games/illegalaliens.png'
import cozycatcafe from '../assets/games/cozycatcafe.png'
import beastbuster from '../assets/games/beastbuster.png'
import bodega from '../assets/games/bodega.jpg'
import endangered from '../assets/games/endangered.jpg'
import funkytown from '../assets/games/funkytown.png'
import goo from '../assets/games/goo.png'
import hellfiler from '../assets/games/hellfiler.gif'
import inthenight from '../assets/games/inthenight.png'
import protest from '../assets/games/protest.png'
import returngame from '../assets/games/return.png'
import ribbit from '../assets/games/ribbit.png'
import skull from '../assets/games/skull.png'


const styles = {
    container: {
        backgroundColor: 'white',
        // position: 'relative',
        paddingBottom: '90px',
        paddingTop: '50px',
        marginTop: '40px',
        // display: 'block'
    },
    header: {
        padding: '20px',
        color: 'black'
    }
  };

function createGallery() {
    var pastGames = [
    {
        name: "HellFiler",
        img: hellfiler,
        link: "https://1f1n1ty.itch.io/hellfiler"
    },
    {
        name: "Protest Protector",
        img: protest,
        link: "https://itch.io/jam/ut-blm-game-jam/rate/706038"
    },
    {
        name: "Funkytown",
        img: funkytown,
        link: "https://loremonger.itch.io/funkytown"
    },
    {
        name: "Sympathy for the Skull",
        img: skull,
        link: "https://digocorbellini.itch.io/sympathy-for-the-skull"
    },
    {
        name: "Bodega",
        img: bodega,
        link: "https://aquafroq.itch.io/bodega"
    },
    {
        name: "Beast Buster",
        img: beastbuster,
        link: "https://ivanolin.itch.io/beast-buster"
    },
    {
        name: "Endangered",
        img: endangered,
        link: "https://masonator555.itch.io/endangered"
    },
    {
        name: "In the Night",
        img: inthenight,
        link: "https://danirumbaut.itch.io/in-the-night"
    },
    {
        name: "The Goo Game",
        img: goo,
        link: "https://marcor.itch.io/the-goo-game"
    },
    {
        name: "Ribbit",
        img: ribbit,
        link: "https://valeria-trevino.itch.io/ribbit"
    },
    {
        name: "Return: Into Darkness",
        img: returngame,
        link: "https://impuuuu.itch.io/return-into-darkness"
    },
    {
        name: "Junkyard Brawl",
        img: junkyardbrawl,
        link: "https://bootskats.itch.io/junkyard-brawl"
    },
    {
        name: "Trash Dash",
        img: trashdash,
        link: "https://raneyj.itch.io/trash-dash"
    },
    // {
    //     name: "Block Adventures",
    //     img: blockadventures,
    //     link: "https://zorzag.itch.io/block-adventure"
    // },
    // {
    //     name: "Little Blockers",
    //     img: littleblockers,
    //     link: "https://verybester.itch.io/little-blockers"
    // },
    // {
    //     name: "Garbage Gladiators",
    //     img: garbagegladiators,
    //     link: "https://someotherguy.itch.io/garbage-gladiators"
    // },
    // {
    //     name: "Ascent",
    //     img: ascent,
    //     link: "https://feezy15.itch.io/ascent"
    // },
    {
        name: "Picture Perfect",
        img: pictureperfect,
        link: "https://crimecommitter.itch.io/picture-perfect"
    },
    {
        name: "Trashteroids",
        img: trashteroids,
        link: "https://jomard123.itch.io/trashteroids"
    },
    { 
        name: "Tetris Blocker",
        img: tetrisblocker,
        link: "https://raneyj.itch.io/tetris-blocker"
    },
    { 
        name: "B-lock",
        img: b_lock,
        link: "https://crabtree.itch.io/block"
    },
    // { 
    //     name: "Ignite",
    //     img: ignite,
    //     link: "https://typesteam.itch.io/ignite"
    // },
    {
        name: "Block Star",
        img: blockstar,
        link: "https://justin2jam.itch.io/block-star"
    },
    // { 
    //     name: "Impact!",
    //     img: impact,
    //     link: "https://absoluthecc.itch.io/impact"
    // },
    { 
        name: "Mission ImPAWsible",
        img: missionimpawsible,
        link: "https://imcdo.itch.io/mission-impawsible"
    },
    { 
        name: "LandFill",
        img: landfill,
        link: "https://imcdo.itch.io/landfill-2017-fall-tycoon"
    },
    { 
        name: "Cozy Cat Cafe",
        img: cozycatcafe,
        link: "https://globalgamejam.org/2019/games/cozy-cat-cafe"
    },
    { 
        name: "Deception",
        img: deception,
        link: "https://joyshocker.itch.io/deception-demo2"
    },
    { 
        name: "Trashket Brawl",
        img: trashketbrawl,
        link: "https://flador.itch.io/trashketbrawl"
    },
    // { 
    //     name: "Swiffer's Adventure",
    //     img: swiffersadventure,
    //     link: "https://sara77789.itch.io/swiffers-adventure"
    // },
    // { 
    //     name: "Illegal Aliens",
    //     img: illegalaliens,
    //     link: "https://jonathan-serbent.itch.io/illegal-aliens"
    // },
    {
        name: "Blocker",
        img: "https://img.itch.zone/aW1hZ2UvMzA2MDQxLzE1MDE4NTguanBn/347x500/68ucyK.jpg",
        link: "https://jackyoustra.itch.io/blocker"
    },
];
    
    return (pastGames.map(item => 
            <GameCard name={item.name} img={item.img} link={item.link}/>
        )
        
    );
}

export class Games extends React.Component {
    render(){
        // console.log(maxWidth)
        return(
            <div style={styles.container}>
                <Typography variant="h2" color='secondary' style={styles.header}>Previous Game Jam Games</Typography>
                <br/>
                <div className="gamesGallery" align="center">
                    <Grid container spacing={3} align="center" style={{width: '70%'}}>
                        {createGallery()}
                    </Grid>
                </div>

                {/* <div id="content-desktop">
                    <Typography variant="h2" color='secondary' style={styles.header}>DESKTOP</Typography>
                </div>

                <div id="content-mobile">
                <Typography variant="h2" color='secondary' style={styles.header}>MOBILE</Typography>
                </div> */}
            </div>
        );
    }
} // https://www.clickertraining.com/files/u1/lab_puppy_250.jpg
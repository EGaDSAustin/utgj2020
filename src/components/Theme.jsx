import React from "react";
import { Typography, Container } from "@material-ui/core";

const diversifiers = [
    {
        name: "Fine Literature",
        description:
            "Include 2 poems written by the team that the player can find and read",
    },
    {
        name: "Is Something Behind the Waterfall?",
        description:
            "Include a secret reward/passage only accessible by moving behind a waterfall",
    },
    { name: "Frog", description: "Include a frog in the game" },
    {
        name: "Is that a JoJo reference??",
        description: " Make everything in your game a reference",
    },
    {
        name: "Rock, Paper, Scissors",
        description: "Include a type of weapon triangle",
    },
    { name: "Can you pet the dog?", description: "Include a pettable dog" },
    {
        name: "UnSilent Protagonist",
        description: "include a player character who talks constantly",
    },
    {
        name: "Character creator",
        description:
            "Allow the player to customize their character’s physical appearance",
    },
    {
        name: "Fashionista",
        description: "Include several equippable outfits for a character",
    },
    {
        name: "Super Hexagon",
        description: "Make a 2D game with a hexagonal tile-map",
    },
    {
        name: "In the future…",
        description: "Include dialogue that is randomly generated",
    },
    {
        name: "Check out the enclosed instruction book",
        description:
            "Create a physical instruction book for your game (or digital if we’re online)",
    },
    {
        name: "It’s a feature!",
        description:
            "Make your game crash intentionally (when the player fails, etc.)",
    },
    {
        name: "You cheated not only the game, but yourself",
        description:
            "Add cheats/modifiers to your game that players can unlock/find codes for (outside the game?)",
    },
    {
        name: "Isometric Exercise",
        description: "Make a 3D game with an isometric camera",
    },
    {
        name: "‘Tis the season",
        description: "Make your game based off of a holiday",
    },
    {
        name: "DeviantArt: Resurrection",
        description:
            "Make the main character based off of an old OC by one of your artists",
    },
    {
        name: "I never learned how to reeeeead!",
        description: "Make a narrative-driven game with no (legible) dialogue",
    },
    {
        name: "It’s at least a C+!",
        description:
            "Give a ranking on how well the player did at the end of your game",
    },
    {
        name: "MIDIeval Times",
        description:
            "Make your music in the classic windows MIDI soundfont (for this, we recommend downloading musescore 2 for composing, exporting your song as a MIDI, and then recording the playback using audacity/any DAW).",
    },
    {
        name: "Don’t say a word",
        description:
            "A multiplayer game that requires communication between players, without relying on text or voice",
    },
    { name: "Praise the Sun", description: "Implement a roll" },
    { name: "Sick beats", description: "Have beatboxing in your game" },
    {
        name: "Art…?",
        description: "make the majority of your assets in MS Paint",
    },
    {
        name: "Chaotic kinda good",
        description: "Make a game where you help people by doing something bad",
    },
];

function createTheme() {
    return (
        <div align="center">
            <Container>
                <Typography variant="h4" color="inherit">
                    The theme of the game jam is...
                </Typography>
                <Typography variant="h1" color="primary">
                    Something’s Missing
                </Typography>
            </Container>
        </div>
    );
}

function createDiversifiers() {
    return (
        <div>
            <div align="center">
                <Container>
                    <Typography variant="h2" >
                        DIVERSIFIERS
                    </Typography>
                </Container>
            </div>
            <br />
            {diversifiers.map((div_item) => {
                return (
                    <div align="center">
                        <Typography variant="h6">{div_item.name}</Typography>
                        <Typography variant="body1">
                            {div_item.description}
                        </Typography>
                    </div>
                );
            })}
        </div>
    );
}

export class Theme extends React.Component {
    render() {
        return (
            <div>
                {createTheme()}
                <br />
                {createDiversifiers()}
                <br />
            </div>
        );
    }
}

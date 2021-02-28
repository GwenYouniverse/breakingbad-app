import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from '@material-ui/icons/Stop';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
  
            <Button onClick={toggle} variant="contained" color="secondary">{playing ? <StopIcon /> : <PlayArrowIcon />}</Button>
        
    );
};

export default Player;
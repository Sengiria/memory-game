import React, { useState, useEffect } from "react";

const BackgroundMusic = ({url}) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [audio, playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return (
        <div className="sound-toggle">
            <img onClick={toggle} src={`assets/${playing ? "mute" : "sound"}.png`} alt="sound" />
        </div>
    )
};


export default BackgroundMusic;
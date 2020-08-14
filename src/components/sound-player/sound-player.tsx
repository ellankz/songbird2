import React, { useRef, useLayoutEffect  } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './sound-player.scss';

interface SounPlayerProps {
    sound: string
}

const SoundPlayer = (props: SounPlayerProps) => {
    const player = useRef<AudioPlayer>(null);
    useLayoutEffect (() => {
        if (player.current !== null){
            player.current.audio.current!.pause();
        }
        
    }, [player]);
    return (
        <div className="sound-player">
            <AudioPlayer
                ref = {player}
                src={props.sound}
                showJumpControls={false}
                showDownloadProgress={false}
                customAdditionalControls={[]}
                customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
                layout="horizontal-reverse"
                autoPlayAfterSrcChange={false}
            />
        </div>
        
    );
}

export default SoundPlayer;
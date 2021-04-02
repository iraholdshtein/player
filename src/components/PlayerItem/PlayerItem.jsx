import { useCallback, useState } from 'react';
import './PlayerItem.css';

function PlayerItem (){
    const [status, setStatus]= useState ('play');

    const OnStatusChange = useCallback(() => {
        if (status === 'play'){
            setStatus('stop');
        }
        else if (status === 'pause'){
            setStatus('play');
        }
        else if (status === 'stop'){
            setStatus('play');
        }
    }, [status]);
    
    return(
        <div className="player-item">
            <div className ={`player-item-status is-${status}`}>
                {status}
            </div>
            <div className="player-item-name">
                <ul>
                    <li>Song1</li>
                    <li>Song2</li>
                    <li>Song3</li>
                    <li>Song4</li>
                    <li>Song5</li>
                </ul>
            </div>
            <div className ="slider">
            <div className="start roud">
            </div>
            <div className="line">
            </div>
            <div className="end round">
            </div>

            </div>
            <button onClick={OnStatusChange}>Play</button>
            <button onClick={OnStatusChange}>Stop</button>
            <button onClick={OnStatusChange}>Pause</button>
        </div>
    )
}

export default PlayerItem;
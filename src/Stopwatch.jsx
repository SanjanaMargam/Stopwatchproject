import { useState, useEffect, useRef } from "react";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {

            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalRef.current);
        };

    }, [isRunning]);

    function start() {

        setIsRunning(true);
        startTimeRef.current = Date.now() - time;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {

        setIsRunning(false);
        setTime(0);
    }

    function formatTime() {

        let hours = Math.floor(time / (1000 * 60 * 60));

        let minutes = Math.floor((time / (1000 * 60)) % 60);

        let seconds = Math.floor((time / 1000) % 60);

        let milliseconds = Math.floor((time % 1000) / 10);

        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}:${milliseconds
            .toString()
            .padStart(2, '0')}`;
    }

    return (

        <div className="stopwatch">

            <div className="format">
                {formatTime()}
            </div>

            <div className="buttons">

                <button className="start" onClick={start}>
                    Start
                </button>

                <button className="stop" onClick={stop}>
                    Stop
                </button>

                <button className="reset" onClick={reset}>
                    Reset
                </button>

            </div>

        </div>
    );
}

export default Stopwatch;
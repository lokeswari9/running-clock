import React, { Fragment, useState, useEffect } from 'react';
function App() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    startClock();
      return () => {
        setIsRunning(false);
      };
    }, []);

    const startClock = () => {
      setIsRunning(true);
        const interval = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime.minutes === 0 && prevTime.seconds === 0) {
              clearInterval(interval);
              return { minutes: 0, seconds: 0 };
            }
            if (prevTime.seconds === 0) {
              return { minutes: prevTime.minutes - 1, seconds: 59 };
            }
          return { minutes: prevTime.minutes, seconds: prevTime.seconds - 1 };
        });
      }, 1000);
    };
    const pauseClock = () => {
      setIsRunning(false);
    };
      
    const resetClock = () => {
      setTime({ minutes: 0, seconds: 0 });
      setIsRunning(false);
    };
  return (
    <Fragment>
    <div>
      <div className='row'>
        <input type="number" value={time.minutes} 
          onChange={(e) => setTime({ ...time, minutes: e.target.valueAsNumber })}
        />
        <span>Minutes</span>
        <input type="number" value={time.seconds}
          onChange={(e) => setTime({ ...time, seconds: e.target.valueAsNumber })}
        />
        <span>Seconds</span>
      </div>
      <div className='row'>
        <button onClick={startClock}>Start</button>
        {isRunning ? (
          <button onClick={pauseClock}>Pause</button>
          ) : (
          <button onClick={startClock}>Resume</button>
          )}
        <button onClick={resetClock}>Reset</button>
      </div>
      <div>
        <h1 data-testid="runningclock">{`${time.minutes}:${time.seconds}`}</h1>
      </div>
    </div>
    </Fragment>
  );
}

export default App;

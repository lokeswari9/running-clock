# running-clock
Your task is to implement a React component that renders a running clock that will count down time until it reaches 0 minutes and 0 seconds 
Implement a running-clock that receives its time value from user inputs and allows the user to start, pause/resume the countdown and reset the clock. In order to satisfy the task's requirements, you need to implement the following: 
1. Time display: - time is displayed in and its initial value is θ0:00; a time is displayed in mm:ss format; - 1 minute, 5 seconds should be displayed as: 81:05; - 1 minute, 65 seconds should be displayed as: 02:85. 
2. Inputs: - changing input values does not change the value displayed in <h1 data-testid=" running-clock" >; - inputs do not need to have max or min attributes; o the clock doesn't need to handle negative values; this is not a part of the solution and will not be evaluated. 3. Behavior: 1. On a sTART button click, set the clock value displayed in sh1 data-testid="running-clock" > with the time calculated from the inputs and start counting dow 2. Once the clock is running, update the displayed time every second; 
 3. Once the clock is running and the START button is clicked, restart the clock with the same time originally provided in the inputs; 
 4. Once the countdown is done and the clock reaches θ0:80, stop counting and keep displaying θθ:θθ; 
 5. On a PAUSE / RESUME button click, pause or resume the clock appropriately: - PAUSE puts the countdown on hold; - RESUME resumes the countdown from where it left off; 
 6. Once the RESET button is clicked, both inputs should be reset to θ; 
 7. Once the RESET button is clicked, the time displayed in < h1 data-testid=" running-clock" > should be reset to 00:00

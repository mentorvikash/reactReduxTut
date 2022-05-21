
const Tick = () => {
    return (
        <div>
            <h5> Now the time is {new Date().toLocaleTimeString()}</h5>
        </div>
    )
};

// setInterval(Tick, 1000);

export default Tick
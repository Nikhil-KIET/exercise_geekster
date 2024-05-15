function Navbar({ setCat }) {

    function clickHandler(event) {
        setCat(event.target.getAttribute('name'));
    }

    return (
        <div className="flex justify-evenly gap-5 px-2" onClick={clickHandler}>
            <div className="flex flex-col items-center rounded-md bg-zinc-400 overflow-hidden w-[200px] h-[230px]" name="all">
                <img src="https://imgs.search.brave.com/yPPyAhGYHMl0J-bvAKfAWe5pqWsgzR1uywUyY-xJMeg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZ3ltLWxvZ28t/bWFsZS1mZW1hbGUt/Zml0bmVzcy1sb2dv/LWRlc2lnbi10ZW1w/bGF0ZV84NDEyOTgt/MzA3LmpwZz9zaXpl/PTYyNiZleHQ9anBn" alt="" />
                <h1>ALL</h1>
            </div>
            <div className="flex flex-col items-center bg-zinc-400 overflow-hidden w-[200px] h-[230px]" name="back">
                <img src="https://imgs.search.brave.com/yPPyAhGYHMl0J-bvAKfAWe5pqWsgzR1uywUyY-xJMeg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZ3ltLWxvZ28t/bWFsZS1mZW1hbGUt/Zml0bmVzcy1sb2dv/LWRlc2lnbi10ZW1w/bGF0ZV84NDEyOTgt/MzA3LmpwZz9zaXpl/PTYyNiZleHQ9anBn" alt="" />
                <h1>Back</h1>
            </div>
            <div className="flex flex-col items-center bg-zinc-400 overflow-hidden w-[200px] h-[230px]" name="cardio">
                <img src="https://imgs.search.brave.com/yPPyAhGYHMl0J-bvAKfAWe5pqWsgzR1uywUyY-xJMeg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZ3ltLWxvZ28t/bWFsZS1mZW1hbGUt/Zml0bmVzcy1sb2dv/LWRlc2lnbi10ZW1w/bGF0ZV84NDEyOTgt/MzA3LmpwZz9zaXpl/PTYyNiZleHQ9anBn" alt="" />
                <h1>Cardio</h1>
            </div>
            <div className="flex flex-col items-center bg-zinc-400 overflow-hidden w-[200px] h-[230px]" name="chest">
                <img src="https://imgs.search.brave.com/yPPyAhGYHMl0J-bvAKfAWe5pqWsgzR1uywUyY-xJMeg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZ3ltLWxvZ28t/bWFsZS1mZW1hbGUt/Zml0bmVzcy1sb2dv/LWRlc2lnbi10ZW1w/bGF0ZV84NDEyOTgt/MzA3LmpwZz9zaXpl/PTYyNiZleHQ9anBn" alt="" />
                <h1>Chest</h1>
            </div>
        </div>
    );
}

export default Navbar;

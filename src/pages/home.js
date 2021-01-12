import React, {useState} from 'react';
import NavbarContainer from "../containers/Navbar";
import {CSSTransitionAlert, SwitchTransitionAlert, TransitionAlert, TransitionGroupAlerts} from "../components/Alert";

const Home = () => {
    const [transition, setTransition] = useState(false);
    const [CSSTransition, setCSSTransition] = useState(false);
    const [switchTransition, setSwitchTransition] = useState(false);

    return (
        <div>
            <NavbarContainer/>

            <TransitionAlert isShow={transition} setIsShow={setTransition}/>

            <CSSTransitionAlert isShow={CSSTransition} setIsShow={setCSSTransition}/>

            <button onClick={() => setTransition(true)}>Transition Alert</button>
            <button onClick={() => setCSSTransition(true)}>CSSTransition Alert</button>
            <button onClick={() => setSwitchTransition(true)}>SwitchTransition Alert</button>

            <SwitchTransitionAlert isShow={switchTransition} setIsShow={setSwitchTransition}/>

            <TransitionGroupAlerts/>
        </div>
    );
};

export default Home;

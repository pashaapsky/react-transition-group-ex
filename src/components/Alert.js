import React, {useState} from 'react';
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import {v1 as uuid} from 'uuid'

// обычная анимация входа выхода компонента - тоже самое что и CSSTransition
// но другая механика и классы
export const TransitionAlert = ({isShow, setIsShow}) => {
    return (
        <Transition in={isShow} timeout={500} unmountOnExit>
            {state => (
                <div className={`transition-alert transition-alert-${state}`}>
                    <p>An alert explode</p>

                    <button onClick={() => setIsShow(false)}>x</button>
                </div>
            )}
        </Transition>
    );
};

// в отличии от Transition есть возможность добавить classNames и с ними работать
export const CSSTransitionAlert = ({isShow, setIsShow}) => {
    return (
        <CSSTransition in={isShow} timeout={500} classNames="css-transition-alert" unmountOnExit>
            <div className="css-transition-alert">
                <p>An alert explode</p>

                <button onClick={() => setIsShow(false)}>x</button>
            </div>
        </CSSTransition>
    );
};


// Анимация замены одного компонента другим - 2 варианта out-in и in-out
export const SwitchTransitionAlert = ({isShow, setIsShow}) => {
    /* out-in | in-out */
    return (
        <SwitchTransition mode={"in-out"}>
            <CSSTransition
                key={isShow}
                timeout={500}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                classNames='switch-transition-alert'
            >
                <div className="switch-transition-alert">
                    {isShow ? <p>An alert explode</p> : <p>An alert explode 2 variant</p>}

                    <button onClick={() => setIsShow(isShow => !isShow)}>x</button>
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
};


// Анимация группы компонентов, например когда делаем map
export const TransitionGroupAlerts = () => {
    const [items, setItems] = useState([
        {id: uuid(), text: 'hello 1'},
        {id: uuid(), text: 'hello 2'},
        {id: uuid(), text: 'hello 3'},
        {id: uuid(), text: 'hello 4'}
    ]);

    return (
        <div className="alert-box">
            <TransitionGroup className="alert-box-group">
                {items.map((item) => (
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="alert-box-animate"
                    >
                        <div className="alert-box-item">
                            <button
                                className="remove-btn"
                                onClick={() => {
                                    setItems(alerts => alerts.filter(alert => alert.id !== item.id))
                                }}
                            >
                                x
                            </button>
                            {item.text}
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>

            <button
                className="add-btn"
                onClick={() => {
                    const text = prompt('Введите текст');

                    if (text) {
                        setItems(items => [...items, {id: uuid(), text}])
                    }
                }}
            >ADD new item</button>
        </div>
    );
};


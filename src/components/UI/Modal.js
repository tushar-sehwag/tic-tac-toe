import React from 'react';

import classes from './Modal.module.css';

const Modal = (props) => {
    return (
        <React.Fragment>
            <div className={classes.backdrop} onClick={props.closeModal}/>
            <div className={classes.modal}>
                <p className={classes.content}>{props.message}</p>
                <div>
                    <button onClick={props.closeModal}className={classes.buttonClass}>Close</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;

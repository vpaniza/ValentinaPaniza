import React from 'react';

const Modal = ({children, style, ...props}) => {
    const styles = {
        zIndex: '200000',
        width: '100%', 
        height: '100%', 
        position: 'fixed',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        backgroundColor: 'rgba(0,0,0,0.6)',
        ...style
    }

    return (
        <React.Fragment>
            <div 
                style={styles}
                {...props}
            >
                <div style={{ position:'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display:'flex'}}>
                    { children }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;
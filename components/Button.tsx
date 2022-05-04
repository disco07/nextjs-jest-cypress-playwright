import React from 'react';

interface IButton {
    onClick?: () => void;
    children: JSX.Element | string;
}

const Button = ({onClick, children}: IButton) => {
    return (
        <>
            <button type="button" onClick={onClick}>{children}</button>
        </>
    );
};

export default Button;
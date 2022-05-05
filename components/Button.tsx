import React, {BaseSyntheticEvent} from 'react';

interface IButton {
    onClick?: (e: BaseSyntheticEvent) => void;
    className?: string;
    children: JSX.Element | string;
}

const Button = ({onClick, className="class", children}: IButton) => {
    return (
        <>
            <button type="button" className={className} onClick={onClick}>{children}</button>
        </>
    );
};

export default Button;
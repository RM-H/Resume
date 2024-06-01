


import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [position, setPosition] = useState({ clientX: 0, clientY: 0 });

    const updatePosition = event => {
        const { pageX, pageY, clientX, clientY } = event;
        setPosition({ clientX, clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', updatePosition, false);
        document.addEventListener('mouseenter', updatePosition, false);
        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseenter', updatePosition);
        };
    }, []);

    return position;
};

const Cursor = () => {
    const { clientX, clientY } = useMousePosition();

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex:0,

                pointerEvents: 'none'
            }}
        >
            <svg
                width='31rem'
                height='31rem'
                viewBox="0 0 400 400"
                style={{
                    position: 'absolute',
                    left: clientX,
                    top: clientY,
                    transform: 'translate(-50%, -50%)'
                }}

            >
                <defs>
                    <radialGradient id="a">
                        <stop offset="36%" stopColor="rgba(27,36,56,1)"/>
                        <stop offset="81%" stopColor="rgba(15,23,42,1)"/>
                        <stop offset="100%" stopColor="rgba(15,23,42,1)"/>
                    </radialGradient>
                </defs>
                <circle fill={'url(#a)'} cx="200" cy="200" r="200"/>
            </svg>


        </div>
    )
        ;
};

export default Cursor;
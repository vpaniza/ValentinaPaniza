import React from 'react';

const Image = ({src, alt, ...props}) => {
    return(
        <>
            <img 
                src={src}
                alt={alt}
            />
        </>
    )
}

export default Image;
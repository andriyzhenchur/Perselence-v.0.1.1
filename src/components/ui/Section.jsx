import React from 'react';

const Section = ({ id, className = '', children, ...props }) => {
    return (
        <section id={id} className={`section ${className}`} {...props}>
            {children}
        </section>
    );
};

export default Section;

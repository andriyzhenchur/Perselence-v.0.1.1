import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    href,
    ...props
}) => {
    const baseClass = 'btn';
    const variantClass = variant === 'ghost' ? 'btn-ghost' : `btn-${variant}`;
    const combinedClass = `${baseClass} ${variantClass} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClass} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClass} {...props}>
            {children}
        </button>
    );
};

export default Button;

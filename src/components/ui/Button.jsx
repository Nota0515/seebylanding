const Button = ({children, className, onClick, href}) => {
    const classes = `inline-flex items-center justify-center rounded-full gap-x-2 border-n-4/20 px-5 lg:px-10 text-white whitespace-nowrap ${className || ""}`;

    const renderbtn = () => {
        return (
            <button className={classes} onClick={onClick}>
                {children}
            </button>
        );
    }

    const renderlink = () => {
        return (
            <a href={href} className={classes}>
                <span className="z-2">{children}</span>
            </a>
        );
    }

    return href ? renderlink() : renderbtn();
}

export default Button

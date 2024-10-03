const LinkButton = ({ className, label, href = '#' }) => {
    return (
        <a className={`link-button ${className}`} href={href}>
            {label}
        </a>
    );
};

export default LinkButton;

// eslint-disable-next-line react/prop-types
const Card = ({ children, className }) => {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    );
};

export default Card;

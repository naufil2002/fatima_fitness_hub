// eslint-disable-next-line react/prop-types
const List = ({ children, className }) => {
    return <li className={`relative ${className}`}>{children}</li>;
};

export default List;

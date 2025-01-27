// eslint-disable-next-line react/prop-types
const Text = ({ as: Tag = "p", children, className }) => {
    return <Tag className={className}>{children}</Tag>;
};

export default Text;

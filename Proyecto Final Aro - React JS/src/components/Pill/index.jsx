const Pill = ({ quantity }) => {
    return (
        <span className="pill">
            {quantity > 0 ? quantity : null} {}
        </span>
    );
};

export default Pill;


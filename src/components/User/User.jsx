import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid green',
        padding: '5px',
        borderRadius: '8px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`${id}`}>Show Details</Link>
        </div>
    );
};

export default User;
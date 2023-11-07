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
        </div>
    );
};

export default User;
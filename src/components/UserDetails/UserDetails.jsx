import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    const style = {
        color: "red"
    }
    return (
        <div>
            <h1>Details about <span style={style}>{name}</span></h1>
        </div>
    );
};

export default UserDetails;
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1>Hello from the profile pg.</h1>
            <p>Hi brent.</p>
            <hr />
            <h2>The profile visited is here:</h2>
            <Outlet />
        </div>
    );
};

export default Profile;
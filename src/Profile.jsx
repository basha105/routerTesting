import { useParams } from 'react-router-dom';
import DefaultProfile from './DefaultProfile.jsx';
import Spinach from './Spinach.jsx';
import Popeye from './Popeye.jsx';

const Profile = () => {
    const { name } = useParams();

    return (
        <div>
            <h1>Hello from the profile pg.</h1>
            <p>Hi brent.</p>
            <hr />
            <h2>The profile visited is here:</h2>
            {name === "popeye" ? (
                <Popeye />
            ) : name === "spinach" ? (
                <Spinach />
            ) : (
                <DefaultProfile />
            )}
            
        </div>
    );
};

export default Profile;
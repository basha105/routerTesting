import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oh no, this route dont exist</h1>
            <Link to="/">
            You can go back to the home page here!
            </Link>
        </div>
    );
};

export default ErrorPage;
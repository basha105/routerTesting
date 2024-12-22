import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from main page</h1>
      <p>Here are some examples of links to other pgs</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
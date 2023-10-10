import HomePage from './pages/HomePage';
import "./styles/App.css";
import "./styles/fonts.css"
import "./styles/header.css"
import "./styles/footer.css"

function App() {

  return (
    <div className="App">
      <nav className="navBar">
        <ul>
            <li>mx51</li>
            <li>Jobs</li>
        </ul>
      </nav>
      {/* Other components */}

      <HomePage />
    </div>
  );
}

export default App;

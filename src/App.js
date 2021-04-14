import './App.css';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/AuthContext';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
      
    </AuthProvider>
  );
}

export default App;

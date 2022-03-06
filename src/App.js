import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AdminDashboard from './compoents/AdminDashboard/AdminDashboard';
import Home from './compoents/Home/Home';
import Login from './compoents/Login/Login';
import PrivateRoute from './compoents/PrivateRoute';
import UserDashboard from './compoents/UserDashboard/UserDashboard';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/user">
            <UserDashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminDashboard />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

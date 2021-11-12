
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AllProducts from './Pages/AllProducts/AllProducts';
import Dashboard from './Pages/Dashboard/Dashboard';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Firebase/Login/Login';
import Register from './Pages/Login/Firebase/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Navigation from './Shared/Navbar/Navigation';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/allProducts">
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/placeOrder/:productId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

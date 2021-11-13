
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AllProducts from './Pages/AllProducts/AllProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Firebase/Login/Login';
import Register from './Pages/Login/Firebase/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Navigation from './Shared/Navbar/Navigation';
import NotFound from './Shared/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
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
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

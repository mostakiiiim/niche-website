import React from 'react';


import {

    Switch,
    Route,

    useRouteMatch,
    NavLink
} from "react-router-dom";

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenuItem,

} from 'cdbreact'
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProducts from './AddProducts/AddProducts';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';
import MyReview from './MyReview/MyReview';
import Pay from './Pay/Pay';

import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    const { logOut } = useAuth();
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const linkStyle = {
        textDecoration: 'none',
        color: 'white'

    }

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }} >
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large d-inline">  <NavLink href="/dashboard"
                    className="text-decoration-none d-inline"
                    style={{ color: 'inherit' }} to={`${url}`} activeClassName="activeClicked">
                    <CDBSidebarMenuItem>  Dashboard</CDBSidebarMenuItem>
                </NavLink></i>}>




                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content " >


                    {
                        admin &&
                        <>
                            <NavLink style={linkStyle} to={`${url}/makeAdmin`} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table" >Make Admin</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={`${url}/addProducts`} style={linkStyle} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table" >Add Product</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink to={`${url}/manageOrders`} style={linkStyle} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Manage Orders</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={`${url}/manageProducts`} style={linkStyle} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Manage Product</CDBSidebarMenuItem>
                            </NavLink>

                            <button onClick={logOut} style={{ textDecoration: 'none', color: 'red', backgroundColor: "#333333", border: 'none' }} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">
                                    Logout
                                </CDBSidebarMenuItem>
                            </button>
                        </>}
                    {!admin &&
                        <>
                            <NavLink to={`${url}/myOrders`} style={linkStyle} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">My Orders</CDBSidebarMenuItem>
                            </NavLink>


                            <NavLink to={`${url}/payment`} style={linkStyle} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Make Payment</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={`${url}/review`} style={linkStyle} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Give Review</CDBSidebarMenuItem>
                            </NavLink>

                            <button onClick={logOut} style={{ textDecoration: 'none', color: 'red', backgroundColor: "#333333", border: 'none' }} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">
                                    Logout
                                </CDBSidebarMenuItem>
                            </button>
                        </>

                    }







                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Sidebar Footer
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
            <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                </Route>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>

                <AdminRoute path={`${path}/addProducts`}>
                    <AddProducts></AddProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/manageOrders`}>
                    <ManageOrders></ManageOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
                <Route exact path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route exact path={`${path}/review`}>
                    <MyReview></MyReview>
                </Route>
                <Route exact path={`${path}/payment`}>
                    <Pay></Pay>
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;
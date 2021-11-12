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
    CDBSidebarMenu,
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
import { RiDashboardLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import { Spinner } from 'react-bootstrap';

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }} >
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: 'inherit' }}
                    >
                        Sidebar
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">

                    <NavLink to={`${url}`} activeClassName="activeClicked">
                        <CDBSidebarMenuItem>  <RiDashboardLine size={32} />Dashboard</CDBSidebarMenuItem>
                    </NavLink>

                    {
                        admin ?
                            <>
                                <NavLink to={`${url}/makeAdmin`} activeClassName="activeClicked">
                                    <CDBSidebarMenuItem className="bg-secondary" ><GrUserAdmin size={32} className="text-white" /> Make Admin</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to={`${url}/addProducts`} activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="table">Add Product</CDBSidebarMenuItem>
                                </NavLink>

                                <NavLink to={`${url}/manageOrders`} activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="table">Manage Orders</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to={`${url}/manageProducts`} activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="table">Manage Product</CDBSidebarMenuItem>
                                </NavLink>
                            </> :
                            <>
                                <NavLink to={`${url}/myOrders`} activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="table">My Orders</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to={`${url}/payment`} activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="table">Make Payment</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to={`${url}/review`} activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="table">Give Review</CDBSidebarMenuItem>
                                </NavLink>


                                <NavLink to="/analytics" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="chart-line">
                                        Analytics
                                    </CDBSidebarMenuItem>
                                </NavLink>
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
                <Route path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/review`}>
                    <MyReview></MyReview>
                </Route>
                <Route path={`${path}/payment`}>
                    <Pay></Pay>
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;
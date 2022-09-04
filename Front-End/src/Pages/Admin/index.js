import React from 'react';
import Sidebar from './Dashboard/SidebarAdmin';
import Navbar from './Dashboard/NavbarAdmin';
import Widget from './Dashboard/WidgetAdmin';
import Chart from './Dashboard/ChartAdmin';
import Featured from './Dashboard/FeaturedAdmin';
import List from './Dashboard/TableAdmin';
import './admin.scss';
import { User } from './datasource';

function AdminPage() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget />
                    {/* <Widget type="order" />
                    <Widget type="blance" />
                    <Widget type="earning" /> */}
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Don hang</div>
                    <List />
                </div>
                <User />
            </div>
        </div>
    );
}

export default AdminPage;

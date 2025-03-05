import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import {Outlet} from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <LeftSidebar />
            <Outlet/>
            <RightSidebar />
        </div>
    );
}

export default Home;
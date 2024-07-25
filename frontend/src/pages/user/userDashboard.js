import React from 'react';
import Dashboard from '../../images/dashboard.png';

const UserDashboard = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
                style={{ width: '50%', height: '50%' }}
                src={Dashboard}
                alt="logo dashboard"
            />
        </div>
    );
}

export default UserDashboard;

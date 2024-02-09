import React from 'react';

const Home = () => {
    return (
        <div className='container text-center'>
            <h1 className='mt-5 mb-5'>
                Welcome to Electricity Board Applications Manager!
            </h1>
            <p className='my-5'>
                The App is designed for your comfort and ease of use. You can manage your electricity board applications and track their status. 
            </p>
            <p className='my-3'>The <strong>Dashboard</strong>  allows you to add, edit/view applications.
                The <strong>Application Tracker</strong>  allows you to track the status of your past applications.
            </p>
        </div>
    );
};

export default Home;

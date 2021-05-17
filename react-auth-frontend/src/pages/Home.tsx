import React from 'react';

const Home = (props: { name: string, email: string, phone: string, address: string }) => {
    return (
        <div>
            {props.name ? 'Hi ' + props.name : 'You are not logged in'}
            {props.name ? 'Your email ' + props.email : 'You are not logged in'}
            {props.name ? 'Hi ' + props.phone : 'You are not logged in'}
            {props.name ? 'Hi ' + props.address : 'You are not logged in'}
        </div>
    );
};

export default Home;

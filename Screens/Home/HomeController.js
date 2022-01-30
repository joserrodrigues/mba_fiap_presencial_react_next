import React, {useEffect, useState} from 'react';
import HomeView from './HomeView';
import { useRouter } from 'next/router';

const HomeController = ({ items }) => {
    
    console.log("Checking items Controller");
    console.log(items);

    return (
        <HomeView items={items} />
    );
};

export default HomeController;
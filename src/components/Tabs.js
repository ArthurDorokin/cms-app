import React, { useEffect } from 'react';
import { Link, useNavigate, useMatch } from 'react-router-dom';

import tabsData from '../tabs.json';

function Tabs() {
    const navigate = useNavigate();
    const match = useMatch('/:tabId/*');
    const currentTab = match?.params.tabId;

    useEffect(() => {
        if (!currentTab) {
            navigate('/dummyList');
        }
    }, [currentTab, navigate]);

    return (
        <div className="tabs">
            {tabsData
                .sort((a, b) => a.order - b.order)
                .map((tab) => (
                    <Link to={tab.id} key={tab.id}>
                        {tab.title}
                    </Link>
                ))}
        </div>
    );
}

export default Tabs;
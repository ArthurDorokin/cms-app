import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Tabs from './components/Tabs';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Tabs />
                <Routes>
                    <Route path=":tabId/*" element={<TabLoader />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function TabLoader() {
    const { tabId } = useParams();
    const TabComponent = React.lazy(() => import(`./tabs/${tabId}`));

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <TabComponent />
        </React.Suspense>
    );
}

export default App;
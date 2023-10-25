import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Outlet,
    Routes
} from 'react-router-dom';
import tabsData from './tabs.json';
import DummyTable from "./tabs/dummyTable";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <ul>
                    {tabsData.map((tab) => (
                        <li key={tab.id}>
                            <Link to={tab.id}>{tab.title}</Link>
                        </li>
                    ))}
                </ul>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {tabsData.map((tab) =>
                            <Route
                                key={tab.id}
                                path={tab.id}
                                //component={lazy(() => import(`./${tab.path}`))}
                                element={<DummyTable />}
                                // component={lazy(() => import(`./tabs/${tab.path}`))}
                                //element={lazy(() => import(`./tabs/${tab.path}`))}
                                //element={lazy(() => import(`./tabs/${tab.path}`))}
                            />
                            // console.log(tab);
                            // return
                            //     <Route
                            //         key={tab.id}
                            //         path={tab.id}
                            //         //component={lazy(() => import(`./${tab.path}`))}
                            //         //component={tab[1].id}
                            //         //element={lazy(() => import(`./tabs/${tab.path}`))}
                            //         element={lazy(() => import(`./tabs/${tab.path}`))}
                            //     />

                        )}
                        {/*{console.log(tabsData[0].id)}*/}
                        {/*<Route path="/" component={tabsData[0].id} />*/}
                    </Routes>
                </Suspense>
                <Outlet />
            </div>
        </BrowserRouter>
    );
};

export default App;
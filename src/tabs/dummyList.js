import React from 'react';
import { Outlet } from 'react-router-dom';

const DummyList = () => (
    <table>
        <tr>
            <td>Dummy</td>
            <td>List</td>
        </tr>
        <Outlet />
    </table>
);

export default DummyList;
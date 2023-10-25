import React from 'react';
import { Outlet } from 'react-router-dom';

const DummyChart = () => (
    <table>
        <tr>
            <td>Dummy</td>
            <td>Chart</td>
        </tr>
        <Outlet />
    </table>
);

export default DummyChart;
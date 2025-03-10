import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from "js-cookie";

const PrivateRoute = () => {
    const dispatch = useDispatch();

    const [ok, setOk] = useState(true);
    const token = Cookies.get("token")

    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
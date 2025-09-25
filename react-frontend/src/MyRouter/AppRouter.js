import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleDocumentStoragesPage from "../components/app_components/DocumentStoragesPage/SingleDocumentStoragesPage";
import DocumentStorageProjectLayoutPage from "../components/app_components/DocumentStoragesPage/DocumentStorageProjectLayoutPage";
import SingleErrorLogsPage from "../components/app_components/ErrorLogsPage/SingleErrorLogsPage";
import ErrorLogProjectLayoutPage from "../components/app_components/ErrorLogsPage/ErrorLogProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
<Route path="/documentStorages/:singleDocumentStoragesId" exact element={<SingleDocumentStoragesPage />} />
<Route path="/documentStorages" exact element={<DocumentStorageProjectLayoutPage />} />
<Route path="/errorLogs/:singleErrorLogsId" exact element={<SingleErrorLogsPage />} />
<Route path="/errorLogs" exact element={<ErrorLogProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
        </Routes>
    );
}

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);

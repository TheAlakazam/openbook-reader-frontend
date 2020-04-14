import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'

export default function ProtectedRoute(props : any) {
    return (
        <Fragment>
            { localStorage.getItem("token") !== null ? props.children : <Redirect to="/login"/>}
        </Fragment>
    )
}
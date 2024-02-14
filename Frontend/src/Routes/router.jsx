import React, { Suspense, lazy, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
const LandingPage = lazy(() => import("../Components/Home/LandingPage"));
const SignIn = lazy(() => import("../Components/Auth/SignIn"))
const SignUp = lazy(() => import("../Components/Auth/SignUp"))
const NotFound = lazy(() => import("../Components/NotFound/404"))

export default function routes() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Fragment>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path='/SignIn' element={<SignIn />} />
                    <Route path='/SignUp' element={<SignUp />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Fragment>
        </Suspense>
    )
}
// Created by szatpig at 2019/5/20.
import React from 'react'

interface Params{
    pastDelay?:any,
    error?:any
}

const DelayLoading = ({ pastDelay, error }:Params) => {
    if (pastDelay) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>
    } else {
        return null
    }
}
export default DelayLoading
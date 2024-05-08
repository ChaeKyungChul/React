import React from 'react'
import { MemmoryRouter, Route, Routes, Link, matchPath, useLocation} from 'react-router-dom'
import { Stack, Box, Tabs, Tab, Typography } from '@mui/material'

const Router = (props) => {
    const { children } = props;
    return(
        <MemoryRouter initialIndex ={0}>

        </MemoryRouter>
   )
}

export default Router
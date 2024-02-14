import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import HomeBg from '../../assets/homeBg.png'

export default function LandingPage() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    const theme = useTheme()

    useEffect(() => {

        const user = localStorage.getItem('User')
        if (user !== null) setIsLoggedIn(true)
        setLoading(false)


    }, [])

    if (loading)
        return (
            <Box sx={{
                display: 'flex',
                backgroundColor: theme.palette.primary.background,
                flexDirection: 'column',
                minHeight:'100vh',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Typography
                    variant="h4"
                    align="center"
                    color="primary">
                    Loading....
                </Typography>

            </Box>
        )

    return (
        <Fragment>
            <Suspense fallback={<div>loading...</div>}>
                <Box sx={{
                    display: 'flex',
                    backgroundColor: theme.palette.primary.background,
                    flexDirection: 'column'
                }}>
                    <Box sx={{
                        backgroundImage: `url(${HomeBg})`,
                        backgroundSize: 'cover',
                        width: '100%',
                        minHeight: '100vh',
                        alignItems: 'center'
                    }}>
                        <Box>

                        </Box>
                        <Box >
                            <Typography
                                variant="h4"
                                align="center"
                                color="primary"
                            >
                                Your Best Movie Review Platform
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography color="primary">
                            Hello World
                        </Typography>
                    </Box>
                </Box>
            </Suspense>
        </Fragment>
    )
}

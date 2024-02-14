import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import HomeBg from '../../assets/homeBg.png'

export default function LandingPage() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const theme = useTheme()

    return (
        <Fragment>
            <Suspense fallback={<div>loading...</div>}>
                <Box sx={{
                    display: 'flex',
                    backgroundColor: theme.palette.primary.background,
                    flexDirection:'column'
                }}>
                    <Box sx={{
                        backgroundImage: `url(${HomeBg})`,
                        backgroundSize: 'cover',
                       
                        width: '100%'
                    }}>
                        <Box>
                            <Typography
                                variant="h3"
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

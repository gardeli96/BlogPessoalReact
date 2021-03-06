import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
        var footerComponent;

        if(token != "") {
            footerComponent =<Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/gardeli96" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className='redes' />
                        </a>
                        
                        <a href="https://www.linkedin.com/in/daniel-gardeli-389858150/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className= 'box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://brasil.generation.org" rel="noopener noreferrer">
                            <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;
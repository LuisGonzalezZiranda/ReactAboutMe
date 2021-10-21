import * as React from 'react';
import indice from './img/índice.jpg'
import avicii from './img/avicii.jpg'
import avicii2 from './img/avicii2.jpg'
import Caravan from './img/Caravan.jpg'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Grid } from '@mui/material';

function MediaControlCard() {
    const theme = useTheme();

    return (
        <div>
            <Typography variant="h4" component="div" gutterBottom>
                Diversos álbumes favoritos de Música.
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Stories
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Avicii
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={avicii}
                            alt="Avicii"
                        />
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    True
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Avicii
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={avicii2}
                            alt="Daft Punk"
                        />
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    R.A.M
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Daft Punk
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={indice}
                            alt="Daft Punk"
                        />
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Chronologic
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Caravan Palace
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={Caravan}
                            alt="Daft Punk"
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default MediaControlCard;

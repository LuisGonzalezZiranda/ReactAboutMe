import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import lugar1 from './img/lugar1.jpg'
import lugar2 from './img/lugar2.jpg'
import lugar3 from './img/lugar3.jpeg'
import lugar4 from './img/lugar4.jpg'
import { Grid } from '@mui/material';

function RecipeReviewCard() {
    return (
        <div>
            <Typography variant="h4" component="div" gutterBottom>
                Lugares preferidos.
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title="Plaza Principal"
                            subheader="Patzcuaro, Michoacan"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={lugar1}
                            alt="Plaza Vasco de Quiroga"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                La plaza Vasco de Quiroga, un hermoso lugar para pasear cualquier dia de la semana
                                con diversas actividades para toda la familia es un lugar fantastico, en especial
                                fechas de Noviembre y Semana Santa donde se destaca la variedad de puestos.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title="Cinemas"
                            subheader="Diversas Ubicaciones"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={lugar2}
                            alt="Cinemas"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Los cinemas, tales como cinepolis o cinemex, sin importar el recinto son lugares
                                donde se puede disfrutar de vivir emociones intensas, con el cine en parte de su
                                apogeo actual, se puede disfrutar con quien sea el asistir a una funcion y llevarse
                                un buen momento.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title="Plaza de Armas"
                            subheader="Morelia, Michoacan"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={lugar3}
                            alt="Plaza de Armas"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                La plaza de armas, un hermoso lugar con muchos lugares para visitar en cualquier dia,sumado a sus
                                diversas actividades esta rodeado
                                de lugares como teatros, cafés, iglesias, restaurantes o tiendad de variedades que
                                estan todas a la cercania de la esta mitica plaza.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title="Festivales de Musica"
                            subheader="Diversas Ubicaciones"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={lugar4}
                            alt="Festivales de Musica"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Ya sea desde el EDC en el estado de Mexico, el Ultra Music en Estados Unidos o el ya
                                conocido Tomorrowland, los festivales de musica son lugares donde pasar el tiempo escuchando
                                a sus artistas favoritos sumado al ambiente sensacional, se vuelve una experiencia unica.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>

                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </div>

    );
}

export default RecipeReviewCard;
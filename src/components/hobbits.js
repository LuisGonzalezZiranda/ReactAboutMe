import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import hobie from './img/hobie.jpg'
import hobies2 from './img/hobies2.jpg'
import hobies3 from './img/hobies3.jpg'
import { Grid } from '@mui/material';

function hobbits() {
    return (
        <div>
            <Typography variant="h4" component="div" gutterBottom>
                Hobbits
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title="Senderismo"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={hobie}
                            alt="Bosque"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                El caminar por el bosque es saludable, ayuda en la salud al caminar ademas de la mental
                                al poder ir por todo el bosuqe tranquilo y no solo eso, el simplemente ir observando todo
                                es algo relajante y que adoro.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title="Ver series"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={hobies2}
                            alt="Netflix"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Ver series, peliculas y documentales es muy entretenido, hay muchos generos
                                me encanta en especial la comedia, el drama y el horror, casi siempre acompañado
                                de botana y bebida para maratonear.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title="Jugar Videojuegos"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={hobies3}
                            alt="Videojuegos"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                El jugar con amigos ya sea en consola o en linea, es algo muy entretenido, dependiendo
                                de la persona varia el juego pero Call of duty, Left 4 Dead o LoL son los que regularmente uso con amigos
                                ya que es mas entretenido que solo.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>

    );
}

export default hobbits;
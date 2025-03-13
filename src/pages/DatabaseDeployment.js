import React from 'react';
import { Grid, Typography } from '@mui/material';

const DatabaseDeployment = () => {
    return (
        <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} textAlign="center">
                <h2 className="title mx-auto mt-4 gradient-text fw-bold">
                    Deploying Databases Efficiently
                </h2>
                <p className="gray-50 text-center mb-4">
                    Leverage our platform for seamless and scalable database deployment.
                </p>
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="center" flexWrap="wrap">
                <div className="text-align-center mx-5">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/fr/6/62/MySQL.svg"
                        alt="MySQL"
                        height={150}
                        width={150}
                    />
                    <Typography variant="body2" sx={{ my: 2 }}>MySQL</Typography>
                </div>

                <div className="text-align-center mx-5">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/MariaDB_colour_logo.svg"
                        alt="MariaDB"
                        height={150}
                        width={150}
                    />
                
                    <Typography variant="body2" sx={{ my: 2, textAlign: "center" }}>MariaDB</Typography>
                </div>

                <div className="text-align-center mx-5">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                        alt="PostgreSQL"
                        height={150}
                        width={80}
                    />
                    <Typography variant="body2" sx={{ my: 2 }}>PostgreSQL</Typography>
                </div>

                <div className="text-align-center mx-5">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/5/5a/MongoDB_Fores-Green.svg"
                        alt="MongoDB"
                        height={150}
                        width={150}
                    />
                    <Typography variant="body2" sx={{ my: 2 }}>MongoDB</Typography>
                </div>

                <div className="text-align-center mx-5">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg"
                        alt="Redis"
                        height={150}
                        width={150}
                    />
                    <Typography variant="body2" sx={{ my: 2 }}>Redis</Typography>
                </div>
            </Grid>
        </Grid>
    );
};

export default DatabaseDeployment;

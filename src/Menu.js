import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textAlign: "center"
    },
}));

function Menu({translating, current, total}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{borderRadius: "5px"}}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        {translating ? `Translating ${translating} (${current}/${total})` : "i18n Translator"}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Menu

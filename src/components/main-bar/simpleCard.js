import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Divider } from '@material-ui/core';
import { CommunityContent, MiscellaneousContent } from '../main-bar/helpSection/helpSection.js';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        backgroundColor: '#0079d3',
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <CommunityContent />
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Card className={classes.root}>
                <CardContent>
                    <MiscellaneousContent />
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    );
}
import { Button, Drawer, Grid, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu, SportsEsports, Home, Add } from '@material-ui/icons';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
    const [anchor, setAnchor] = useState<boolean>(false);
    const toggleDrawer = () => setAnchor(!anchor);

    return (
        <Grid>
            <Grid item xs={12}>
                <Button onClick={toggleDrawer} startIcon={<Menu />} size='large'></Button>
                <Drawer anchor='left' open={anchor} onClose={toggleDrawer}>
                    <Link href='/'>
                        <ListItem button>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary='Home' />
                        </ListItem>
                    </Link>
                    <Link href='/game/new'>
                        <ListItem button>
                            <ListItemIcon>
                                <Add />
                            </ListItemIcon>
                            <ListItemText primary='New' />
                        </ListItem>
                    </Link>
                    <Link href='/game'>
                        <ListItem button>
                            <ListItemIcon>
                                <SportsEsports />
                            </ListItemIcon>
                            <ListItemText primary='Games' />
                        </ListItem>
                    </Link>
                </Drawer>
            </Grid>
        </Grid>
    );
};

import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';
import { scroller } from 'react-scroll';


const SideDrawer = (props) => {
    const links = [
        { where: 'featured', value: 'To Top' },
        { where: 'venueinfo', value: 'Venue Info' },
        { where: 'highlignts', value: 'Highlignts' },
        { where:'pricing',value:'Pricing'},
        { where:'location',value:'Location'}
    ];

    const scrollToElement = (elem) => {
        scroller.scrollTo(elem,{
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }
    const renderItem = (item) => (
        <ListItem button onClick={()=> scrollToElement(item.where)} key={item.where}>
            {item.value}
        </ListItem>
    )


    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
            
            >
                <List component="nav" >
                    { links.map((item) => renderItem(item) ) }
                </List>
        </Drawer>
    )
}



export default SideDrawer
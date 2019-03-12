import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types';
import media from "styled-media-query";
import styled from 'styled-components'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import GettingHere from '../tabs/GettingHere';
import BigDay from '../tabs/BigDay';
import withRoot from '../../utils/withRoot';
// import { theme } from '../../utils/materialTheme'


const TabContainer = styled.div `
    max-height: 95vh;
    width: 100vw;
    padding-bottom: 7.5vh;
    overflow-y: scroll;
`
// Old code from Material Tabs
// function TabContainer({ children, dir }) {
//   return (
//     <Typography component="div" dir={dir} style={{ }}>
//       {children}
//     </Typography>
//   );
// }

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: '100vw',
    },
    
    tabsRoot: {
        paddingTop: '1rem',
        backgroundColor: "#144164"
    },

    tabsIndicator: {
        height: "0.4rem",
    },
    
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: "100",
        fontSize: "1.25rem",
        letterSpacing: "0.07rem",
        textTransform: "uppercase",
        color: '#FFF',

        '&:hover': {
            color: '#64D2C8',
            opacity: 1,
        },

        '&$tabSelected': {
            color: '#64D2C8',
            fontWeight: theme.typography.fontWeightMedium,
        },

        '&:focus': {
            color: '#64D2C8',
        },
    
    },
    tabSelected: {},
    typography: {
    padding: theme.spacing.unit * 3,
    },

});

// const themeBuddeen = createMuiTheme({
//     // palette: {
//     //     primary: { 
//     //         main: '#144164',
//     //         contrastText: '#fff',
//     //     },
//     //     secondary: { main: '#64D2C8' },
//     //     white: { main: '#FFF' },
//     // },

//     typography: {
//         "fontFamily": "\GillSansMT\", \"Helvetica\", \"Arial\", sans-serif",
//     },

//     // tabsIndicator: {
//     //     backgroundColor: '#1890ff',
//     // },
// });

class TravelTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
        
        <div className={classes.root}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <AppBar position="fixed" color="primary">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        variant="fullWidth"
                        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                    >
                        <Tab 
                            label="Getting Here"
                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }} 
                        />
                        <Tab 
                            label="The Big Day"
                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }} 
                        />
                        {/* <Tab 
                            label="Sight Seeing"
                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }} 
                        /> */}
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                    disabled={true}
                    action={actions => {
                        this.swipeableActions = actions;
                    }}
                >
                    <TabContainer dir={theme.direction}>
                        <GettingHere />
                    </TabContainer>

                    <TabContainer dir={theme.direction}>
                        <BigDay />
                    </TabContainer>

                    {/* <TabContainer dir={theme.direction}>
                        Item Three
                    </TabContainer> */}
                
                </SwipeableViews>
      </div>
    );
  }
}

TravelTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles, { withTheme: true })(TravelTabs));

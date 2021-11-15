import React, { useState, useCallback } from 'react';
import { Box, Button, Fab, Grid, Icon, makeStyles, Paper, Tab, Tabs, Tooltip, useMediaQuery, useTheme } from '@material-ui/core';

import AppBar from './AppBar';
import Warps, { DEFAULT_WARP } from './Warps';
import Wefts, { DEFAULT_WEFT } from './Wefts';
import FullScreenDialog from './TotalCostDialog';

const useStyles = makeStyles((theme) => {
  return {
    appBarContainer: {
      minHeight: 75,
    },
    updateButton: {
      position: 'fixed',
      bottom: 10,
      left: 20,
      zIndex: theme.zIndex.mobileStepper + 1
    },
  }
});

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className="p-3"
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [wefts, setWefts] = useState([ DEFAULT_WEFT ]);
  const [warps, setWarps] = useState([ DEFAULT_WARP ]);

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  const handleReset = useCallback(() => {
    setWarps([]);
    setWefts([]);
  }, []);

  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <div className='d-flex flex-column align-items-center bootstrap-wrapper'>
      <Tooltip title='Update'>
        <Fab
          id='app-update'
          color='secondary'
          className={`${classes.updateButton} d-none`}
        >
          <Icon>get_app</Icon>
        </Fab>
      </Tooltip>

      <div className={`flex-grow-0 w-100 ${classes.appBarContainer}`}>
        <AppBar />
      </div>

      <Grid container spacing={3} className="w-100 d-flex justify-content-center">
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={`${classes.paper} mb-4`}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Warps" {...a11yProps(0)} />
                <Tab label="Wefts" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Warps
                warps={warps}
                onChange={setWarps}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Wefts
                wefts={wefts}
                onChange={setWefts}
              />
            </TabPanel>
          </Paper>

          <Box>
            <Button
              className="text-light"
              variant="contained"
              size="large"
              color="primary"
              disabled={!wefts.length && !warps.length}
              onClick={() => setShowSolution(true)}
              startIcon={<Icon>calculate</Icon>}
              fullWidth
            >
              Calculate
            </Button>

            <Button
              className="mt-3 text-light"
              variant="contained"
              size="large"
              color="primary"
              disabled={!wefts.length && !warps.length}
              onClick={handleReset}
              startIcon={<Icon>refresh</Icon>}
              fullWidth
            >
              Reset
            </Button>
          </Box>
        </Grid>
      </Grid>

      <FullScreenDialog
        open={showSolution}
        handleClose={() => setShowSolution(false)}
        warps={warps}
        wefts={wefts}
      />
    </div>
  );
}

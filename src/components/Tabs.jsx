import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Login from "./Login";
import RegistrationPage from "./Registeration"
import "../scss/tab.scss"

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '40%', typography: 'body1', mx: "auto", mt: "10%" }} >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" className='tabs'>
                        <Tab sx={{
                            width: "50%"
                        }} label="Sign In" value="1" />
                        <Tab sx={{
                            width: "50%"
                        }}
                            label="Sign Up" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Login /></TabPanel>
                <TabPanel value="2"><RegistrationPage /></TabPanel>
            </TabContext>
        </Box>
    );
}
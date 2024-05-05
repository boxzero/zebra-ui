import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Tabs, TextField, Typography } from '@mui/material';
import React, { useState, ChangeEvent } from 'react'

import Tab from '@mui/material/Tab';
import PropertyDetails from './MiniForms/PropertyDetails';
import LocalityDetails from './MiniForms/LocalityDetails';
import RentalDetails from './MiniForms/RentalDetails';

import SendIcon from '@mui/icons-material/Send';
import Amenities from './MiniForms/Amenities';
import Images from './MiniForms/Images';
import Schedule from './MiniForms/Schedule';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import OwnerDetails from './MiniForms/OwnerDetails';

type ImageType = {
  // Define properties for your image object
  id: number;
  url: string;
};




const PostNewRentalProperty = () => {

  //const [apartmentType, setApartmentType] = useState('');
  const [value, setValue] = React.useState(0);



  const [formData, setFormData] = useState({
    propertyDetails: {
      apartmentType: '',
      bhkType: '',
      floor: '',
      totalfloor: '',
      propertyAge: '',
      facing: '',
      builtupArea: " ",
    },
    localityDetails: {
      city: '',
      locality: '',
      LandMark: '',
    },
    rentalDetails: {
      propertyAvailable: '',
      ExpectedRent: '',
      ExpectedDeposit: '',
      monthlyMaintenence: '',
      AvailableFrom: '',
      furniture: '',
      parking: '',
      Description: '',
      preferredTenanats: '',
      expectedMaintenance: '',
      preferredTenants: {
        anyone: false,
        family: false,
        bachelorFemale: false,
        bachelorMale: false,
        company: false
      },
    },
    ownerDetails: {
      firstName: '',
      lastName: '',
      contactNumber: '',
      Email: '',
      Notes: ''
    },
    Amenities: {
      Bathroom: '',
      Balcony: '',
      WaterSupply: '',
      Gym: '',
      NonVegAllowed: '',
      GatedSecurity: '',
      showProperty: '',
      Description: '',
      contactNumber: ''
    },

    Schedule: {
      Availability: '',
      StartTime: '',
      EndTime: ''
    }
  });
  const [parentImages, setParentImages] = useState<ImageType[]>([]);
  const [checkBox, setCheckBox] = useState({
      anyone: false,
      family: false,
      bachelorFemale: false,
      bachelorMale: false,
      company: false
  })
  const [amenitiesCheckBox,setAmenitiesCheckBox]=useState({
    selectAllAmenities:false,
    lift: false,
    intercom: false,
    childrenPlayArea: false,
    servantRoom: false,
    gasPipeline: false,
    rainwaterHarvesting: false,
    housekeeping: false,
    visitorParking: false,
    internetServices: false,
    clubHouse: false, 
    swimmingPool: false,
    fireSafety: false,
    shoppingCentre: false,
    park: false,
    sewageTreatmentPlant: false,
    powerBackup: false,
  })
  const handleChange = (tabName: string, newData: any) => {

    setFormData((prevFormData) => ({
      ...prevFormData,
      [tabName]: newData,
    }));
  };


  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("Changed", newValue);
    setValue(newValue);
  };


  const handleNextTab = () => {
    setValue(prevTab => prevTab + 1);
  }
  const handlePrevTab = () => {
    if (value > 0)
      setValue(prevTab => prevTab - 1);
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Form Data ', formData);
    // Handle form submission logic
  };




  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (

    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Property Details" {...a11yProps(0)} />
            <Tab label="Locality Details" {...a11yProps(1)} />
            <Tab label="Rental Details" {...a11yProps(2)} />
            <Tab label="Owner Details" {...a11yProps(3)} />
            <Tab label="Amenities" {...a11yProps(4)} />
            <Tab label="Images" {...a11yProps(5)} />
            <Tab label="Schedule" {...a11yProps(6)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <PropertyDetails formData={formData.propertyDetails}
            handleChange={(newData) => handleChange('propertyDetails', newData)} onNextTab={handleNextTab} />

        </TabPanel>

        <TabPanel value={value} index={1}>
          <LocalityDetails formData={formData.localityDetails} handleChange={(newData) => handleChange('localityDetails', newData)} onNextTab={handleNextTab} OnPrevTab={handlePrevTab} />

        </TabPanel>

        <TabPanel value={value} index={2}>
          <RentalDetails formData={formData.rentalDetails} checkBox={checkBox} setCheckBox={setCheckBox}
            handleChange={(newData) => handleChange('rentalDetails', newData)} onNextTab={handleNextTab} OnPrevTab={handlePrevTab} />

        </TabPanel>

        <TabPanel value={value} index={4}>
          <Amenities onNextTab={handleNextTab} amenitiesCheckBox={amenitiesCheckBox} setAmenitiesCheckBox={setAmenitiesCheckBox} formData={formData.Amenities} handleChange={(newData) => handleChange('Amenities', newData)} OnPrevTab={handlePrevTab} />

        </TabPanel>


        <TabPanel value={value} index={5}>
          <Images onNextTab={handleNextTab} parentImages={parentImages} setParentImages={setParentImages} onPrevTab={handlePrevTab} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </TabPanel>

        <TabPanel value={value} index={6}>
          <Schedule formData={formData.Schedule} handleChange={(newData) => handleChange('Schedule', newData)} onNextTab={handleNextTab} OnPrevTab={handlePrevTab} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </TabPanel>

        <TabPanel value={value} index={3}>
          <OwnerDetails formData={formData.ownerDetails} handleChange={(newData: any) => handleChange('ownerDetails', newData)} onNextTab={handleNextTab} OnPrevTab={handlePrevTab} />

        </TabPanel>

      </Box>

    </>


  )
}

export default PostNewRentalProperty;
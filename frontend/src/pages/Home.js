import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import Footer from '../component/Footer'
import CardElement from '../component/CardElement';
import LoadingBox from '../component/LoadingBox';
import { Box, Container, Card, Typography, Stack, useTheme, MenuList, MenuItem, ListItemIcon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../redux/actions/jobAction';
import { Link, useParams } from 'react-router-dom';
import SelectComponent from '../component/SelectComponents';
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Home = () => {
    const { jobs, setUniqueLocation, pages, loading } = useSelector(state => state.loadJobs);
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const { keyword, location } = useParams();
    const [page, setPage] = useState(1);
    const [cat, setCat] = useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, cat, location));
    }, [page, keyword, cat, location, dispatch]);

    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, []);

    const handleChangeCategory = (e) => {
        setCat(e.target.value);
    };

    return (
        <>
        <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
            <Navbar />
            <Header />
            <Container>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Box sx={{ flex: 2, p: 2 }}>
                        <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                            <Box sx={{ pb: 2 }}>
                                <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                    Filter Job by category
                                </Typography>
                            </Box>
                            <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />
                        </Card>
                         {/* jobs by location */}
                         <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    {/* <h4>Filter by category</h4> */}
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter job by location
                                    </Typography>
                                    <MenuList>
                                        {
                                            setUniqueLocation && setUniqueLocation.map((location, i) => (
                                                <MenuItem key={i}>
                                                    <ListItemIcon>
                                                        <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
                                                    </ListItemIcon>
                                                    <Link to={`/search/location/${location}`}>{location}</Link>
                                                </MenuItem>
                                            ))
                                        }
                                    </MenuList>

                                </Box>
                            </Card>
                    </Box>
                    <Box sx={{ flex: 5, p: 2 }}>
                        {loading ? (
                            <LoadingBox />
                        ) : jobs && jobs.length === 0 ? (
                            <Typography variant="h6" align="center">No jobs found.</Typography>
                        ) : (
                            jobs.map((job, i) => (
                                <CardElement
                                    key={i}
                                    id={job._id}
                                    jobTitle={job.title}
                                    description={job.description}
                                    salary={job.salary}
                                    category={job.jobType ? job.jobType.jobTypeName : "No category"}
                                    location={job.location}
                                />
                            ))
                        )}
                    </Box>
                </Stack>
            </Container>
        </Box>
         <Footer />
         
         </>
    );
}

export default Home;

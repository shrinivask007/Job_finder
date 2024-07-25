import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CardElement from '../../component/CardElement';
import { userProfileAction } from '../../redux/actions/userAction';

const UserJobsHistory = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userProfileAction());
    }, [dispatch]);

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "#000000" }}> Jobs History</Typography>
                <Box>
                    {
                        user && user.jobsHistory.map((history, i) => (
                            <CardElement
                                key={i}
                                id={history._id}
                                jobTitle={history.title}
                                description={history.description}
                                category=''
                                location={history.location}
                            />
                        ))
                    }
                </Box>
            </Box>
        </>
    );
};

export default UserJobsHistory;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { deleteJobReducer,createJobTypeReducer,updateJobReducer, loadJobReducer,
    registerAjobReducer, loadJobSingleReducer } from './reducers/jobReducer';
import { loadJobTypeReducer  } from './reducers/jobTypeReducer';
import { userApplyJobReducer, userReducerLogout, userReducerProfile, userReducerSignIn,
    userReducerSignUp } from './reducers/userReducer';


//combine reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn:userReducerSignIn,
    logout:userReducerLogout,
    userJobApplication: userApplyJobReducer,
    singleJob:loadJobSingleReducer,
    signUp: userReducerSignUp,
    userProfile:userReducerProfile,
    userApplyJob :userApplyJobReducer,
    deleteJob: deleteJobReducer,
    registerJob: registerAjobReducer,
    updateJob: updateJobReducer
});


//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    mode: {
        mode: "light"
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;
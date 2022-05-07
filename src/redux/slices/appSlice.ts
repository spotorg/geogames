import { createSlice } from "@reduxjs/toolkit";
import { User } from "./userSlice";

export interface ApplicantInterface{
    _id: string;
    distance: number | null;
}

export interface JobInterface{
    _id: string;
    user: string;
    description: string;
    pay: number;
    skills: string | null;
    category: string;
    address: string;
    longitude: number | null;
    latitude: number | null;
    image: string | null;
    acceptedApplicant: string | null;
    applicants: ApplicantInterface[];
    createdAt: string;
}

export interface Review{
    _id: string;
    user: string;
    rating: number;
    reviewableId: string;
    type: string;
    text: string;
}

export interface AppInfo{
    jobs: JobInterface[] | null;
    jobFilters: string[];
    jobSearchQuery: string;
    users: User[] | null;
    reviews: Review[] | null;
}

const initialState: AppInfo = {
    jobs: null,
    jobFilters: [],
    jobSearchQuery: "",
    users: null,
    reviews: null
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setReviews: (state, action) => {
            state.reviews = action.payload;
        },
        addNewReview: (state, action) => {
            if(state.reviews){
                state.reviews.unshift(action.payload);
            }
        },
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        selectLocationFilter: (state, action) => {
            if(state.jobFilters.includes(action.payload)){
                state.jobFilters = state.jobFilters.filter(f => f !== action.payload);
            }else{
                state.jobFilters.push(action.payload);
            }
        }, 
        changeSearchQuery: (state, action) => {
            state.jobSearchQuery = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        updateUser: (state, action) => {
            let updatedUser: User = action.payload;
            let updatedUserId = updatedUser._id;

            let foundUser = state.users?.find((u) => u._id === updatedUserId);

            if(!foundUser){
                return
            }

            foundUser.username = updatedUser.username;
            foundUser.avatar = updatedUser.avatar;
            foundUser.bio = updatedUser.bio;
            foundUser.phoneNumber = updatedUser.phoneNumber;
        },
        addNewJob: (state, action) => {
            if(state.jobs){
                state.jobs.unshift(action.payload);
            }
        },
        applyToJobRdx: (state, action) => {
            let jobId = action.payload.jobId;
            let userId = action.payload._id

            let newApplicant: ApplicantInterface = {
                _id: userId,
                distance: action.payload.distance,
            };

            if(state.jobs){
                let applyJob = state.jobs.find(j => j._id === jobId);
                if(applyJob){
                    if(applyJob.applicants.some((a) => a._id === userId)){
                        applyJob.applicants = applyJob.applicants.filter((a) => a._id !== userId);

                        if(applyJob.acceptedApplicant === userId){
                            applyJob.acceptedApplicant = null;
                        }
                    }else{
                        applyJob.applicants = [...applyJob.applicants, newApplicant];
                    }
                }
            }
        },
        deleteJobRdx: (state, action) => {
            if(state.jobs){
                state.jobs = state.jobs.filter(j => j._id !== action.payload);
            }
        },
        updateJobRdx: (state, action) => {
            let payload: JobInterface = action.payload;

            if(state.jobs){
                let foundJob = state.jobs.find(j => j._id === action.payload._id);
                if(foundJob){
                    foundJob.address = payload.address;
                    foundJob.pay = payload.pay;
                    foundJob.category = payload.category;
                    foundJob.description = payload.description;
                    foundJob.image = payload.image;
                    foundJob.skills = payload.skills;
                }
            }
        },
        acceptApplicantRdx: (state, action) => {
            let payload: JobInterface = action.payload;

            if(state.jobs){
                let foundJob = state.jobs.find(j => j._id === payload._id);
                if(foundJob){
                    foundJob.acceptedApplicant = payload.acceptedApplicant;
                    foundJob.applicants = payload.applicants;
                }
            }
        },
    },
});

export const {
    setJobs,
    setUsers,
    updateUser,
    changeSearchQuery,
    selectLocationFilter,
    addNewJob,
    applyToJobRdx,
    deleteJobRdx,
    updateJobRdx,
    setReviews,
    addNewReview,
    acceptApplicantRdx
} = appSlice.actions;

export const selectApp = (state: any) => state.app;

export default appSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import * as Location from "expo-location";
import { ApplicantInterface, JobInterface } from "./appSlice";

export interface User{
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
    phoneNumber: string;
    bio: string;
    role: string;
    hasPremium: string;
    badges: string[];
    avatar: string;
    reviewed: boolean;
    jobsCompleted: number;
    jobsCreated: number;
}

export interface UserInfo{
    loggedIn: boolean;
    token: string;
    info: null | User;
    loading: boolean;
    location: null | Location.LocationObject;
    jobs: JobInterface[] | null;
}

const initialState: UserInfo = {
    loggedIn: false,
    token: "",
    info: null,
    loading: true,
    location: null,
    jobs: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },
        setUserInfo: (state, action) => {
            state.info = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.info = null;
            state.token = "";
            state.loggedIn = false;
            state.jobs = null;
        },
        load: (state) => {
            state.loading = true;
        },
        loaded: (state) => {
            state.loading = false;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setUserJobs: (state, action) => {
            state.jobs = action.payload;
        },
        addUserJob: (state, action) => {
            if(state.jobs){
                state.jobs = [...state.jobs, action.payload];
            }
        },
        removeUserJob: (state, action) => {
            if(state.jobs){
                state.jobs.filter(j => j._id !== action.payload._id);
            }
        },
        deleteUserJobRdx: (state, action) => {
            if(state.jobs){
                state.jobs = state.jobs.filter(j => j._id !== action.payload);
            }
        },
        updateUserJobRdx: (state, action) => {
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
        acceptUserJobApplicantRdx: (state, action) => {
            let payload: JobInterface = action.payload;

            if(state.jobs){
                let foundJob = state.jobs.find(j => j._id === payload._id);
                if(foundJob){
                    foundJob.acceptedApplicant = payload.acceptedApplicant;
                    foundJob.applicants = payload.applicants;
                }
            }
        },
        applyToUserJobRdx: (state, action) => {
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

                        state.jobs = state.jobs.filter(j => j._id !== applyJob?._id);
                    }else{
                        applyJob.applicants = [...applyJob.applicants, newApplicant];
                    }
                }
            }
        },
    },
});

export const {
    login,
    setUserInfo,
    setToken,
    logout,
    load,
    loaded,
    addUserJob,
    setLocation,
    setUserJobs,
    removeUserJob,
    deleteUserJobRdx,
    updateUserJobRdx,
    applyToUserJobRdx,
    acceptUserJobApplicantRdx
} = userSlice.actions;

export const selectUser = (state: any) => state.user;

export default userSlice.reducer;
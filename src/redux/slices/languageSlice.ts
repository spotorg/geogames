import { createSlice } from "@reduxjs/toolkit";
import languages from "../../languages/langs";

export interface Language {
    home: {
        homeLocation: string;
        homeLocation2: string;
        noJobs: string;
    },
    job: {
        categories: {
            label: string;
            value: string;
            iconType: string;
            icon: string;
        }[]
        options: {
            editJob: string;
            deleteJob: string;
        },
        apply: string;
        unapply: string;
        viewApplicants: string;
        jobFinished: string;
        rateQuality: string;
        submitReview: string;
        viewJobOffer: string;
        changedMyMind: string;
        employersContactInfo: string;
        applicationAccepted: string;
    },
    profile: {
        options: {
            editProfile: string;
            logout: string;
            disableAccount: string;
            changeLang: string;
        },
        editProfile: string;
        jobs: string;
        reviews: string;
        noJobs: string;
        noReviews: string;
    },
    title: {
        signIn: string;
        signUp: string;
    },
    auth: {
        username: string;
        enterUsername: string;
        password: string;
        enterPassword: string;
        email: string;
        enterEmail: string;
        dontHaveAcc: string;
        alreadyHaveAcc: string;
    },
    addJob: {
        header: string;
        description: string;
        requiredSkills: string;
        pay: string;
        address: string;
        phoneNumber: string;
        selectCategory: string;
        image: string;
        expire: string;
        expiresAt: string;
    },
    languages: {
        header: string;
        select: string;
    },
    applicants: {
        noApplicants: string;
        applicants: string;
    },
    review: {
        low: string;
        couldBeBetter: string;
        notBad: string;
        good: string;
        veryGood: string;
        anythingAdd: string;
    },
    categories: {
        deIcing: string;
        lawnMowing: string;
        dogWalking: string;
    },
    errors: {
        fillAllfields: string;
        passwordSixChars: string;
        invalidEmail: string;
        usernameTaken: string;
        emailExists: string;
        activationTokenFail: string;
        emailFail: string;
        registerSuccess: string;
        accountActivated: string;
        usernameDoesntExist: string;
        incorrectPassword: string;
        loginSuccess: string;
        somethingWentWrong: string;
        logInNow: string;
        tokenExpired: string;
        userDoesNotExist: string;
        loggedOut: string;
        updateSuccess: string;
        deleteSuccess: string;
        accountDeleted: string;
        userNotFound: string;
        followedAUser: string;
        unauthorized: string;
        chatCreated: string;
        chatNotFound: string;
        chatUsersNotFound: string;
        leftTheChat: string;
        kickedFromChat: string;
        imageUploadFailed: string;
        eventStarted: string;
        eventNotFound: string;
        dislikedEvent: string;
        likedEvent: string;
        unatendedEvent: string;
        atendedEvent: string;
        jobOfferCreated: string;
        jobNotFound: string;
        applyedToJob: string;
        unapplyedToJob: string;
        applicantNotFound: string;
        applicantAccepted: string;
        applicantRejected: string;
        jobFinished: string;
        enterMSGText: string;
        msgSent: string;
        msgNotFOund: string;
        posted: string;
        postNotFound: string;
        dislikedPost: string;
        likedPost: string;
        reviewNotFound: string;
        spotNotFound: string;
        dislikedSpot: string;
        likedSpot: string;
        noFilesUploaded: string;
        fileSizeTooLarge: string;
        fileFormatIncorrect: string;
        usernameTooLong: string;
        invalidUsername: string;
    },
    yes: string;
    no: string;
    okay: string;
    accept: string;
    reject: string;
}

export interface LanguageInfo {
    lang: string;
    data: Language;
}

const initialState: LanguageInfo = {
    lang: "EN",
    data: languages.english
}

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            if(typeof(action.payload) === "string"){
                state.lang = action.payload;

                if(action.payload === "EN"){
                    state.data = languages.english;
                }else if(action.payload === "LV"){
                    state.data = languages.latvian;
                }
            }
        },
    },
});

export const {
    changeLanguage,
} = languageSlice.actions;

export const selectLanguage = (state: any) => state.lang;

export default languageSlice.reducer;
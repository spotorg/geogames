import { Language } from "../redux/slices/languageSlice";

const translateError = (error: string, language: Language) => {
    if(!language){
        return error;
    }

    switch(error.toLowerCase()){
        case "please fill in all fields": return language.errors.fillAllfields;
        case "password must be at least 6 characters long": return language.errors.passwordSixChars;
        case "invalid email": return language.errors.invalidEmail;
        case "this username is already taken": return language.errors.usernameTaken;
        case "this email already exists": return language.errors.emailExists;
        case "failed to create activation token": return language.errors.activationTokenFail;
        case "failed to send email": return language.errors.emailFail;
        case "register success! check your email to activate account": return language.errors.registerSuccess;
        case "a user with this username already exists": return language.errors.usernameTaken;
        case "a user with this email already exists": return language.errors.emailExists;
        case "account has been activated!": return language.errors.accountActivated;
        case "a user with this username does not exist": return language.errors.userDoesNotExist;
        case "incorrect password": return language.errors.incorrectPassword;
        case "login success!": return language.errors.loginSuccess;
        case "something went wrong": return language.errors.somethingWentWrong;
        case "please login now": return language.errors.logInNow;
        case "your token is incorrect or has expired": return language.errors.tokenExpired;
        case "user does not exist": return language.errors.userDoesNotExist;
        case "logged out": return language.errors.loggedOut;
        case "update success": return language.errors.updateSuccess;
        case "delete success": return language.errors.deleteSuccess;
        case "account deleted": return language.errors.accountDeleted;
        case "couldn't find the user you were looking for": return language.errors.userNotFound;
        case "followed/unollowed a user": return language.errors.followedAUser;
        case "unauthorized": return language.errors.unauthorized;
        case "chat created": return language.errors.chatCreated;
        case "could not find this chat": return language.errors.chatNotFound;
        case "updated": return language.errors.updateSuccess;
        case "deleted": return language.errors.deleteSuccess;
        case "could not access chat user list": return language.errors.chatUsersNotFound;
        case "left from chat": return language.errors.leftTheChat;
        case "kicked from chat": return language.errors.kickedFromChat;
        case "image upload failed": return language.errors.imageUploadFailed;
        case "started an event": return language.errors.eventStarted;
        case "sorry couldn't find a event you were looking for": return language.errors.eventNotFound;
        case "disliked a event": return language.errors.dislikedEvent;
        case "liked a event": return language.errors.likedEvent;
        case "unatended a event": return language.errors.unatendedEvent;
        case "atended a event": return language.errors.atendedEvent;
        case "please enter all fields": return language.errors.fillAllfields;
        case "created a job offer": return language.errors.jobOfferCreated;
        case "sorry couldn't find a job you were looking for": return language.errors.jobNotFound;
        case "applyed to a job": return language.errors.applyedToJob;
        case "unapplyed to a job": return language.errors.unapplyedToJob;
        case "couldn't find this applicant": return language.errors.applicantNotFound;
        case "accepted an applicant": return language.errors.applicantAccepted;
        case "rejected an applicant": return language.errors.applicantRejected;
        case "job finished": return language.errors.jobFinished;
        case "please enter text you want to send": return language.errors.enterMSGText;
        case "couldn't find this chat": return language.errors.chatNotFound;
        case "sent": return language.errors.msgSent;
        case "could not find this message": return language.errors.msgNotFOund;
        case "posted": return language.errors.posted;
        case "sorry couldn't find a post you were looking for": return language.errors.postNotFound;
        case "disliked a post": return language.errors.dislikedPost;
        case "liked a post": return language.errors.likedPost;
        case "sorry couldn't find a review you were looking for": return language.errors.reviewNotFound;
        case "sorry couldn't find a spot you were looking for": return language.errors.spotNotFound;
        case "disliked a spot": return language.errors.dislikedSpot;
        case "liked a spot": return language.errors.likedSpot;
        case "no files were uploaded.": return language.errors.noFilesUploaded;
        case "invalid authentication": return language.errors.unauthorized;
        case "size too large.": return language.errors.fileSizeTooLarge;
        case "file format is incorrect.": return language.errors.fileFormatIncorrect;
        case "your username can't be that long": return language.errors.usernameTooLong;
        case "username can't contain special characters": return language.errors.invalidUsername;
        case "invalid email.": return language.errors.invalidEmail;
        case "password must be at least 6 characters.": return language.errors.passwordSixChars;
        case "please fill in all fields.": return language.errors.fillAllfields;
    }

    return error;
}

export default translateError;
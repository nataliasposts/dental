
export const ROUTE = {
    ACCOUNT: "/account/:userID",
    PROFILE: "/account/:userID/profile",
    APPOINTMENT: "/account/:userID/appointment",
    DOCTOR: "/account/:userID/doctor",
    DOCTOR_SCHEDULE:  '/account/:userID/doctors'
};

export const PATHS = {
    ACCOUNT: id => `/account/${id}`,
    APPOINTMENT: id => `/account/${id}/appointment`,
    PROFILE: id => `/account/${id}/profile`,
    DOCTOR: id => `/account/${id}/doctor`,
    DOCTOR_SCHEDULE: id => `/account/${id}`
};
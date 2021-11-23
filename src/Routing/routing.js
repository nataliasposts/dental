
export const ROUTE = {
    MAIN: "/main",
    ACCOUNT: "/account/:userId",
    PROFILE: "/account/:userId/profile",
    APPOINTMENT: "/account/:userId/appointment",
    DOCTOR: "/account/:userId/doctor",
    DOCTOR_SCHEDULE: "/account/:userId/doctor/:doctorID"
};

export const PATHS = {
    ACCOUNT: id => `/account/${id}`,
    APPOINTMENT: id => `/account/${id}/appointment`,
    PROFILE: id => `/account/${id}/profile`,
    DOCTOR: id => `/account/${id}/doctor`,
    DOCTOR_SCHEDULE: (id, doctorID) => `/account/${id}/doctor/${doctorID}`
};
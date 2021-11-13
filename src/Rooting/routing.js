export const ROUTE = {
    ACCOUNT: "/account/:userID",
    PROFILE: "/account/:userID/profile",
    APPOINTMENT: "/account/:userID/appointment",
};

export const PATHS = {
    ACCOUNT: id => `/account/${id}`,
    APPOINTMENT: id => `/account/${id}/appointment`,
    PROFILE: id => `/account/${id}/profile`
}
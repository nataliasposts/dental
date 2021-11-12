export const ROUTE = {
    ACCOUNT: "/account/:userID",
    APPOINTMENT: "/account/:userID/appointment",
};

export const PATHS = {
    ACCOUNT: id => `/account/${id}`,
    APPOINTMENT: id => `/account/${id}/appointment`,
}
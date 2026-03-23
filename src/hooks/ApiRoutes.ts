// const host = import.meta.env?.VITE_API_HOST;

const loginUserRoute = `/auth/login`;
const registerUserRoute = `/auth/register`;
const requestEmailVerificationRoute = `/auth/resend-email-verification`;
const emailVerificationRoute = `/auth/email-verification`;
const requestAccessTokenRoute = `/auth/request-access-token`;
const verifyUserEmailRoute = `/auth/email-verification/:token`;
const resendEmailVerificationLinkRoute = `/auth/resend-email-verification`;
const forgotPasswordRoute = `/auth/forgot-password`;
const resetPasswordRoute = `/auth/reset-password`;
const logoutUserRoute = `/auth/logout`;

const getAUserRoute = `users/get-a-user-by-id`;
const getAllUsersRoute = `users/get-all-users`;

export {
  emailVerificationRoute,
  forgotPasswordRoute,
  getAllUsersRoute,
  getAUserRoute,
  loginUserRoute,
  logoutUserRoute,
  registerUserRoute,
  requestAccessTokenRoute,
  requestEmailVerificationRoute,
  resendEmailVerificationLinkRoute,
  resetPasswordRoute,
  verifyUserEmailRoute,
};

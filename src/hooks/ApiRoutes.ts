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

const getARiderRoute = ``;
const getAllAdminsRoute = ``;
const getAnAdminsRoute = ``;

export {
  emailVerificationRoute,
  forgotPasswordRoute,
  getAllAdminsRoute,
  getAnAdminsRoute,
  getARiderRoute,
  loginUserRoute,
  logoutUserRoute,
  registerUserRoute,
  requestAccessTokenRoute,
  requestEmailVerificationRoute,
  resendEmailVerificationLinkRoute,
  resetPasswordRoute,
  verifyUserEmailRoute
};


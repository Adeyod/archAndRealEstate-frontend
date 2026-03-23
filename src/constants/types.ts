export type TextLoaderProps = {
  text: React.ReactNode;
  className?: string;
};

export type AdminSidebarProps = {
  closeDrawer?: () => void;
};

export type AllUsersProp = SearchProp & {
  totalUsersCount: number;
  allUsers: CurrentUserType[];
  userRole: string;
  isLoading: boolean;
  handlePageChange: (page: number) => void;
};

export type CircularLoaderProps = {
  text?: string;
  textClassName?: string;
  rollerClassName?: string;
  parentClassName?: string;
};

export type LoginUserPayloadProps = {
  email: string;
  password: string;
};

import type { CSSProperties } from 'react';

export type FormDataInput = CommonParams & {
  setValue: (text: string) => void;

  value: string;
  icon?: React.ReactNode;
};

type ImageProps = {
  url: string;
  public_url: string;
};

type CommonParams = {
  title: string;
  type: string;
  placeholder: string;
  required: boolean;
};

export type UserState = {
  currentUser: CurrentUserType;
  accessToken: string;
  refreshToken: string;
  loading?: boolean;
  error?: null;
};

export type SidebarComponentsProps = {
  toggle?: boolean | undefined;
  sideToggle?: boolean | undefined;
  handleSuperAdminMenuToggle?: () => void;
  handleSideToggle?: () => void;
  superAdminMenuOpen?: boolean | undefined;
  handleAdminMenuToggle?: () => void;
  adminMenuOpen?: boolean | undefined;
  handleTeacherMenuToggle?: () => void;
  teacherMenuOpen?: boolean | undefined;
  handleParentMenuToggle?: () => void;
  parentMenuOpen?: boolean | undefined;
  handleStudentMenuToggle?: () => void;
  studentMenuOpen?: boolean | undefined;
};

export type IdParamFetch = {
  id: string;
};

export type CurrentUserType = {
  _id: object;
  address?: string;
  createdAt: Date;
  email: string;
  firstName: string;
  lastName: string;
  referral_code: string;
  city: string;
  isVerified: boolean;
  phone: string;
  role: string;
  status: string;
  updatedAt: Date;
  profileImage?: ImageProps;
};

type ImgProp = {
  src: string;
  alt: string;
};

export type ImageComponentProps = {
  imageObj: ImgProp | undefined;
  imageStyle: CSSProperties | string;
  imageContainerStyle: CSSProperties | string;
};

export type ReusableModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  modalStyle: string;
};

export type RequestEmailVerificationPayload = {
  email: string;
};

export type EmailVerificationPayload = {
  token: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type LoginFormDataKey = keyof LoginFormData;

export type LoginParams = CommonParams & {
  field: LoginFormDataKey;
};

export type ResetPasswordFormData = {
  token: string;
  password: string;
  confirm_password: string;
};

export type RegisterUserPayloadProps = LoginFormData & {
  role: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  confirmPassword: string;
};

export type ButtonProps = {
  loading: boolean;
  title: string;
  alternateTitle: string;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  buttonContainerStyle?: CSSProperties | string;
  buttonStyle?: CSSProperties | string;
};

export type SearchProp = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export type ReusableTableProps = {
  data: CurrentUserType[];
  loading: boolean;
  userRole: string;
  roleToFetch: string;
  title: string;
  totalRows: number;
  onPageChange: (page: number) => void;
};

export type OtherResponsePayloadType = {
  message: string;
  status: number;
  success: boolean;
};

export type ResetPasswordPayloadProps = {
  token: string;
  password: string;
  confirm_password: string;
};

export type SummaryStatisticsType = {
  totalCounts: number;
  userType: string;
};

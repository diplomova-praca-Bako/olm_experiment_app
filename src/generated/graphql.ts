import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
};

export type ArrayOfData = {
  __typename?: 'ArrayOfData';
  data: Array<Maybe<Scalars['Float']>>;
  name: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  access_token?: Maybe<Scalars['String']>;
  expires_in?: Maybe<Scalars['Int']>;
  refresh_token?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type CameraStatus = {
  __typename?: 'CameraStatus';
  isConnected: Scalars['Boolean'];
  status: Scalars['String'];
};

export type Config = {
  __typename?: 'Config';
  items?: Maybe<Array<Maybe<ConfigMapTuple>>>;
};

export type ConfigInput = {
  deviceName?: Maybe<Scalars['String']>;
  software?: Maybe<Scalars['String']>;
};

export type ConfigItem = {
  __typename?: 'ConfigItem';
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<SyncServerSelectOptions>>>;
  placeholder?: Maybe<Scalars['String']>;
  rules?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ConfigMapTuple = {
  __typename?: 'ConfigMapTuple';
  items?: Maybe<Array<Maybe<ConfigItem>>>;
  scriptName?: Maybe<ScriptName>;
};

export type CreateDevice = {
  device_type_id: Scalars['ID'];
  name: Scalars['String'];
  port: Scalars['String'];
  software: Array<Scalars['ID']>;
  status?: Maybe<DeviceStatus>;
};

export type CreateDeviceType = {
  name: Scalars['String'];
};

export type CreateSoftware = {
  name: Scalars['String'];
};

export type Device = {
  __typename?: 'Device';
  created_at: Scalars['DateTime'];
  deviceType: DeviceType;
  id: Scalars['ID'];
  is_reserved: Scalars['Boolean'];
  name: Scalars['String'];
  port: Scalars['String'];
  software: Array<Software>;
  status?: Maybe<DeviceStatus>;
  updated_at: Scalars['DateTime'];
};

export type DeviceConfig = {
  deviceID: Scalars['ID'];
  deviceName?: Maybe<Scalars['String']>;
  software?: Maybe<Scalars['String']>;
};

/** A paginated list of Device items. */
export type DevicePaginator = {
  __typename?: 'DevicePaginator';
  /** A list of Device items. */
  data: Array<Device>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type DeviceReservationStatusInput = {
  deviceID: Scalars['ID'];
  isReserved: Scalars['Boolean'];
};

export enum DeviceStatus {
  /** offline */
  Offline = 'offline',
  /** online */
  Online = 'online'
}

export type DeviceType = {
  __typename?: 'DeviceType';
  created_at: Scalars['DateTime'];
  devices: Array<Device>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

/** A paginated list of DeviceType items. */
export type DeviceTypePaginator = {
  __typename?: 'DeviceTypePaginator';
  /** A list of DeviceType items. */
  data: Array<DeviceType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ExperimentDetail = {
  __typename?: 'ExperimentDetail';
  status?: Maybe<ExperimentStatus>;
  url?: Maybe<Scalars['String']>;
  values: Array<Maybe<ArrayOfData>>;
};

export enum ExperimentStatus {
  /** failed */
  Failed = 'failed',
  /** finished */
  Finished = 'finished',
  /** running */
  Running = 'running'
}

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ChangeScript?: Maybe<OutputScript>;
  RunScript?: Maybe<OutputScript>;
  StopScript?: Maybe<OutputScript>;
  createDevice: Device;
  createDeviceType: DeviceType;
  createSoftware: Software;
  forgotPassword: ForgotPasswordResponse;
  login: AuthPayload;
  logout: LogoutResponse;
  refreshToken: RefreshTokenPayload;
  register: RegisterResponse;
  removeDevice: Device;
  removeDeviceType: DeviceType;
  removeSoftware: Software;
  socialLogin: AuthPayload;
  startVideoStream: VideoStreamStatus;
  stopVideoStream: StopVideoStreamStatus;
  updateDevice: Device;
  updateDeviceReservationStatus: UpdateDeviceReservationStatusResult;
  updateDeviceType: DeviceType;
  updateForgottenPassword: ForgotPasswordResponse;
  updatePassword: UpdatePasswordResponse;
  updateSoftware: Software;
  updateUser?: Maybe<User>;
  verifyEmail: AuthPayload;
};


export type MutationChangeScriptArgs = {
  runScriptInput?: Maybe<RunScriptInput>;
};


export type MutationRunScriptArgs = {
  runScriptInput?: Maybe<RunScriptInput>;
};


export type MutationStopScriptArgs = {
  runScriptInput?: Maybe<RunScriptInput>;
};


export type MutationCreateDeviceArgs = {
  input?: Maybe<CreateDevice>;
};


export type MutationCreateDeviceTypeArgs = {
  input?: Maybe<CreateDeviceType>;
};


export type MutationCreateSoftwareArgs = {
  input?: Maybe<CreateSoftware>;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};


export type MutationRefreshTokenArgs = {
  input?: Maybe<RefreshTokenInput>;
};


export type MutationRegisterArgs = {
  input?: Maybe<RegisterInput>;
};


export type MutationRemoveDeviceArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveDeviceTypeArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveSoftwareArgs = {
  id: Scalars['ID'];
};


export type MutationSocialLoginArgs = {
  input: SocialLoginInput;
};


export type MutationUpdateDeviceArgs = {
  input?: Maybe<UpdateDevice>;
};


export type MutationUpdateDeviceReservationStatusArgs = {
  deviceReservationStatusInput?: Maybe<DeviceReservationStatusInput>;
};


export type MutationUpdateDeviceTypeArgs = {
  input?: Maybe<UpdateDeviceType>;
};


export type MutationUpdateForgottenPasswordArgs = {
  input?: Maybe<NewPasswordWithCodeInput>;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePassword;
};


export type MutationUpdateSoftwareArgs = {
  input?: Maybe<UpdateSoftware>;
};


export type MutationUpdateUserArgs = {
  inputUpdate?: Maybe<UpdateUser>;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type NewPasswordWithCodeInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
  token: Scalars['String'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

export type OutputScript = {
  __typename?: 'OutputScript';
  errorMessage: Scalars['String'];
  experimentID: Scalars['ID'];
  status?: Maybe<Scalars['String']>;
};

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetConfigByDeviceType?: Maybe<Config>;
  SyncServer: SyncServerData;
  cameraStatus: CameraStatus;
  device_types?: Maybe<DeviceTypePaginator>;
  devices?: Maybe<DevicePaginator>;
  experimentDetails?: Maybe<ExperimentDetail>;
  getDevice: Device;
  me?: Maybe<User>;
  software?: Maybe<SoftwarePaginator>;
  user?: Maybe<User>;
  users?: Maybe<UserPaginator>;
  videoStreamStatus: VideoStreamStatus;
};


export type QueryGetConfigByDeviceTypeArgs = {
  configInput?: Maybe<ConfigInput>;
};


export type QueryDevice_TypesArgs = {
  first?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryDevicesArgs = {
  first?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryExperimentDetailsArgs = {
  experimentID?: Maybe<Scalars['ID']>;
};


export type QueryGetDeviceArgs = {
  id: Scalars['ID'];
};


export type QuerySoftwareArgs = {
  first?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type RefreshTokenInput = {
  refresh_token?: Maybe<Scalars['String']>;
};

export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  access_token: Scalars['String'];
  expires_in: Scalars['Int'];
  refresh_token: Scalars['String'];
  token_type: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  status: RegisterStatuses;
  tokens?: Maybe<AuthPayload>;
};

export enum RegisterStatuses {
  MustVerifyEmail = 'MUST_VERIFY_EMAIL',
  Success = 'SUCCESS'
}

export type RunScriptInput = {
  device?: Maybe<DeviceConfig>;
  experimentID?: Maybe<Scalars['ID']>;
  fileName?: Maybe<Scalars['String']>;
  inputParameter?: Maybe<Scalars['String']>;
  scriptName?: Maybe<Scalars['String']>;
};

export type RunScriptType = {
  __typename?: 'RunScriptType';
  command?: Maybe<Scalars['String']>;
};

export enum ScriptName {
  /** change */
  Change = 'change',
  /** start */
  Start = 'start',
  /** startLocal */
  StartLocal = 'startLocal',
  /** stop */
  Stop = 'stop',
  /** update */
  Update = 'update'
}

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

export type SocialLoginInput = {
  provider: Scalars['String'];
  token: Scalars['String'];
};

export type Software = {
  __typename?: 'Software';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

/** A paginated list of Software items. */
export type SoftwarePaginator = {
  __typename?: 'SoftwarePaginator';
  /** A list of Software items. */
  data: Array<Software>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type StopVideoStreamStatus = {
  __typename?: 'StopVideoStreamStatus';
  isStopped: Scalars['Boolean'];
  status: Scalars['String'];
};

export type SyncServerCommand = {
  __typename?: 'SyncServerCommand';
  input: Array<Maybe<SyncServerInput>>;
  name: Scalars['String'];
};

export type SyncServerData = {
  __typename?: 'SyncServerData';
  devices: Array<Maybe<SyncServerDevice>>;
};

export type SyncServerDevice = {
  __typename?: 'SyncServerDevice';
  id: Scalars['ID'];
  name: Scalars['String'];
  output: Array<Maybe<SyncServerOutput>>;
  software: Array<Maybe<SyncServerSoftware>>;
  type: Scalars['String'];
};

export type SyncServerInput = {
  __typename?: 'SyncServerInput';
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<SyncServerSelectOptions>>>;
  order: Scalars['Int'];
  placeholder?: Maybe<Scalars['String']>;
  row: Scalars['Int'];
  rules?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SyncServerOutput = {
  __typename?: 'SyncServerOutput';
  defaultVisibilityFor?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  title: Scalars['String'];
};

export type SyncServerSelectOptions = {
  __typename?: 'SyncServerSelectOptions';
  name: Scalars['String'];
  value: Scalars['Int'];
};

export type SyncServerSoftware = {
  __typename?: 'SyncServerSoftware';
  commands: Array<Maybe<SyncServerCommand>>;
  has_schema?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateDevice = {
  deviceType: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  port: Scalars['String'];
  software: Array<Scalars['ID']>;
};

export type UpdateDeviceReservationStatusResult = {
  __typename?: 'UpdateDeviceReservationStatusResult';
  updatedDevicesCount: Scalars['Int'];
};

export type UpdateDeviceType = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UpdatePassword = {
  old_password: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type UpdatePasswordResponse = {
  __typename?: 'UpdatePasswordResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type UpdateSoftware = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UpdateUser = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: 'UserPaginator';
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type VerifyEmailInput = {
  token: Scalars['String'];
};

export type VideoStreamStatus = {
  __typename?: 'VideoStreamStatus';
  isRunning: Scalars['Boolean'];
  status?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  login?: Maybe<LoginInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', access_token?: string | null | undefined, user?: { __typename?: 'User', name?: string | null | undefined, email?: string | null | undefined, id?: string | null | undefined } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'LogoutResponse', status: string, message?: string | null | undefined } };

export type RunScriptMutationVariables = Exact<{
  input?: Maybe<RunScriptInput>;
}>;


export type RunScriptMutation = { __typename?: 'Mutation', RunScript?: { __typename?: 'OutputScript', status?: string | null | undefined, experimentID: string, errorMessage: string } | null | undefined };

export type StopScriptMutationVariables = Exact<{
  input?: Maybe<RunScriptInput>;
}>;


export type StopScriptMutation = { __typename?: 'Mutation', StopScript?: { __typename?: 'OutputScript', status?: string | null | undefined, errorMessage: string } | null | undefined };

export type ChangeScriptMutationVariables = Exact<{
  input?: Maybe<RunScriptInput>;
}>;


export type ChangeScriptMutation = { __typename?: 'Mutation', ChangeScript?: { __typename?: 'OutputScript', status?: string | null | undefined, errorMessage: string } | null | undefined };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id?: string | null | undefined, name?: string | null | undefined, email?: string | null | undefined } | null | undefined };

export type GetExperimentDetailsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetExperimentDetailsQuery = { __typename?: 'Query', experimentDetails?: { __typename?: 'ExperimentDetail', url?: string | null | undefined, status?: ExperimentStatus | null | undefined, values: Array<{ __typename?: 'ArrayOfData', name: string, data: Array<number | null | undefined> } | null | undefined> } | null | undefined };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id?: string | null | undefined, name?: string | null | undefined, email?: string | null | undefined } | null | undefined };

export type GetSoftwareQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSoftwareQuery = { __typename?: 'Query', software?: { __typename?: 'SoftwarePaginator', data: Array<{ __typename?: 'Software', id: string, name: string }> } | null | undefined };

export type GetDeviceTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDeviceTypesQuery = { __typename?: 'Query', device_types?: { __typename?: 'DeviceTypePaginator', data: Array<{ __typename?: 'DeviceType', id: string, name: string }> } | null | undefined };

export type GetDeviceConfigQueryVariables = Exact<{
  configInput?: Maybe<ConfigInput>;
}>;


export type GetDeviceConfigQuery = { __typename?: 'Query', GetConfigByDeviceType?: { __typename?: 'Config', items?: Array<{ __typename?: 'ConfigMapTuple', scriptName?: ScriptName | null | undefined, items?: Array<{ __typename?: 'ConfigItem', name?: string | null | undefined, rules?: string | null | undefined, type?: string | null | undefined, title?: string | null | undefined, placeholder?: string | null | undefined, options?: Array<{ __typename?: 'SyncServerSelectOptions', name: string, value: number } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetDevicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDevicesQuery = { __typename?: 'Query', devices?: { __typename?: 'DevicePaginator', data: Array<{ __typename?: 'Device', id: string, name: string, port: string, deviceType: { __typename?: 'DeviceType', id: string, name: string }, software: Array<{ __typename?: 'Software', id: string, name: string }> }> } | null | undefined };

export type GetDeviceReservationStatusQueryVariables = Exact<{
  deviceId: Scalars['ID'];
}>;


export type GetDeviceReservationStatusQuery = { __typename?: 'Query', getDevice: { __typename?: 'Device', id: string, is_reserved: boolean } };

export type GetDeviceByIdQueryVariables = Exact<{
  input: Scalars['ID'];
}>;


export type GetDeviceByIdQuery = { __typename?: 'Query', getDevice: { __typename?: 'Device', id: string, name: string, port: string, deviceType: { __typename?: 'DeviceType', id: string, name: string }, software: Array<{ __typename?: 'Software', id: string, name: string }> } };

export type GetCameraStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCameraStatusQuery = { __typename?: 'Query', cameraStatus: { __typename?: 'CameraStatus', isConnected: boolean, status: string } };

export type GetVideoStreamStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVideoStreamStatusQuery = { __typename?: 'Query', videoStreamStatus: { __typename?: 'VideoStreamStatus', isRunning: boolean, status?: string | null | undefined } };

export type CreateDeviceMutationVariables = Exact<{
  input?: Maybe<CreateDevice>;
}>;


export type CreateDeviceMutation = { __typename?: 'Mutation', createDevice: { __typename?: 'Device', id: string, name: string, port: string, deviceType: { __typename?: 'DeviceType', id: string, name: string }, software: Array<{ __typename?: 'Software', id: string, name: string }> } };

export type UpdateDeviceMutationVariables = Exact<{
  input?: Maybe<UpdateDevice>;
}>;


export type UpdateDeviceMutation = { __typename?: 'Mutation', updateDevice: { __typename?: 'Device', id: string, name: string, port: string, deviceType: { __typename?: 'DeviceType', id: string, name: string }, software: Array<{ __typename?: 'Software', id: string, name: string }> } };

export type RemoveDeviceMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveDeviceMutation = { __typename?: 'Mutation', removeDevice: { __typename?: 'Device', id: string, name: string, port: string, deviceType: { __typename?: 'DeviceType', id: string, name: string }, software: Array<{ __typename?: 'Software', id: string, name: string }> } };

export type UpdateSoftwareMutationVariables = Exact<{
  input?: Maybe<UpdateSoftware>;
}>;


export type UpdateSoftwareMutation = { __typename?: 'Mutation', updateSoftware: { __typename?: 'Software', id: string, name: string } };

export type CreateSoftwareMutationVariables = Exact<{
  input?: Maybe<CreateSoftware>;
}>;


export type CreateSoftwareMutation = { __typename?: 'Mutation', createSoftware: { __typename?: 'Software', id: string, name: string } };

export type CreateDeviceTypeMutationVariables = Exact<{
  input?: Maybe<CreateDeviceType>;
}>;


export type CreateDeviceTypeMutation = { __typename?: 'Mutation', createDeviceType: { __typename?: 'DeviceType', id: string, name: string } };

export type UpdateDeviceTypeMutationVariables = Exact<{
  input?: Maybe<UpdateDeviceType>;
}>;


export type UpdateDeviceTypeMutation = { __typename?: 'Mutation', updateDeviceType: { __typename?: 'DeviceType', id: string, name: string } };

export type RemoveDeviceTypeMutationVariables = Exact<{
  input: Scalars['ID'];
}>;


export type RemoveDeviceTypeMutation = { __typename?: 'Mutation', removeDeviceType: { __typename?: 'DeviceType', id: string, name: string } };

export type RemoveSoftwareMutationVariables = Exact<{
  input: Scalars['ID'];
}>;


export type RemoveSoftwareMutation = { __typename?: 'Mutation', removeSoftware: { __typename?: 'Software', id: string, name: string } };

export type StartVideoStreamMutationVariables = Exact<{ [key: string]: never; }>;


export type StartVideoStreamMutation = { __typename?: 'Mutation', startVideoStream: { __typename?: 'VideoStreamStatus', isRunning: boolean } };

export type StopVideoStreamMutationVariables = Exact<{ [key: string]: never; }>;


export type StopVideoStreamMutation = { __typename?: 'Mutation', stopVideoStream: { __typename?: 'StopVideoStreamStatus', isStopped: boolean, status: string } };

export type SoftwareDataFragment = { __typename?: 'Software', id: string, name: string };

export type DeviceTypeDataFragment = { __typename?: 'DeviceType', id: string, name: string };

export type DeviceDataFragment = { __typename?: 'Device', id: string, name: string, port: string, deviceType: { __typename?: 'DeviceType', id: string, name: string }, software: Array<{ __typename?: 'Software', id: string, name: string }> };

export const DeviceTypeDataFragmentDoc = gql`
    fragment DeviceTypeData on DeviceType {
  id
  name
}
    `;
export const SoftwareDataFragmentDoc = gql`
    fragment SoftwareData on Software {
  id
  name
}
    `;
export const DeviceDataFragmentDoc = gql`
    fragment DeviceData on Device {
  id
  name
  port
  deviceType {
    ...DeviceTypeData
  }
  software {
    ...SoftwareData
  }
  port
}
    ${DeviceTypeDataFragmentDoc}
${SoftwareDataFragmentDoc}`;
export const LoginDocument = gql`
    mutation login($login: LoginInput) {
  login(input: $login) {
    access_token
    user {
      name
      email
      id
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      login: // value for 'login'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout {
    status
    message
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RunScriptDocument = gql`
    mutation runScript($input: RunScriptInput) {
  RunScript(runScriptInput: $input) {
    status
    experimentID
    errorMessage
  }
}
    `;
export type RunScriptMutationFn = Apollo.MutationFunction<RunScriptMutation, RunScriptMutationVariables>;

/**
 * __useRunScriptMutation__
 *
 * To run a mutation, you first call `useRunScriptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRunScriptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [runScriptMutation, { data, loading, error }] = useRunScriptMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRunScriptMutation(baseOptions?: Apollo.MutationHookOptions<RunScriptMutation, RunScriptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RunScriptMutation, RunScriptMutationVariables>(RunScriptDocument, options);
      }
export type RunScriptMutationHookResult = ReturnType<typeof useRunScriptMutation>;
export type RunScriptMutationResult = Apollo.MutationResult<RunScriptMutation>;
export type RunScriptMutationOptions = Apollo.BaseMutationOptions<RunScriptMutation, RunScriptMutationVariables>;
export const StopScriptDocument = gql`
    mutation stopScript($input: RunScriptInput) {
  StopScript(runScriptInput: $input) {
    status
    errorMessage
  }
}
    `;
export type StopScriptMutationFn = Apollo.MutationFunction<StopScriptMutation, StopScriptMutationVariables>;

/**
 * __useStopScriptMutation__
 *
 * To run a mutation, you first call `useStopScriptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopScriptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopScriptMutation, { data, loading, error }] = useStopScriptMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStopScriptMutation(baseOptions?: Apollo.MutationHookOptions<StopScriptMutation, StopScriptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StopScriptMutation, StopScriptMutationVariables>(StopScriptDocument, options);
      }
export type StopScriptMutationHookResult = ReturnType<typeof useStopScriptMutation>;
export type StopScriptMutationResult = Apollo.MutationResult<StopScriptMutation>;
export type StopScriptMutationOptions = Apollo.BaseMutationOptions<StopScriptMutation, StopScriptMutationVariables>;
export const ChangeScriptDocument = gql`
    mutation changeScript($input: RunScriptInput) {
  ChangeScript(runScriptInput: $input) {
    status
    errorMessage
  }
}
    `;
export type ChangeScriptMutationFn = Apollo.MutationFunction<ChangeScriptMutation, ChangeScriptMutationVariables>;

/**
 * __useChangeScriptMutation__
 *
 * To run a mutation, you first call `useChangeScriptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeScriptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeScriptMutation, { data, loading, error }] = useChangeScriptMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeScriptMutation(baseOptions?: Apollo.MutationHookOptions<ChangeScriptMutation, ChangeScriptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeScriptMutation, ChangeScriptMutationVariables>(ChangeScriptDocument, options);
      }
export type ChangeScriptMutationHookResult = ReturnType<typeof useChangeScriptMutation>;
export type ChangeScriptMutationResult = Apollo.MutationResult<ChangeScriptMutation>;
export type ChangeScriptMutationOptions = Apollo.BaseMutationOptions<ChangeScriptMutation, ChangeScriptMutationVariables>;
export const GetMeDocument = gql`
    query getMe {
  me {
    id
    name
    email
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const GetExperimentDetailsDocument = gql`
    query getExperimentDetails($id: ID!) {
  experimentDetails(experimentID: $id) {
    url
    status
    values {
      name
      data
    }
  }
}
    `;

/**
 * __useGetExperimentDetailsQuery__
 *
 * To run a query within a React component, call `useGetExperimentDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExperimentDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExperimentDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetExperimentDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetExperimentDetailsQuery, GetExperimentDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExperimentDetailsQuery, GetExperimentDetailsQueryVariables>(GetExperimentDetailsDocument, options);
      }
export function useGetExperimentDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExperimentDetailsQuery, GetExperimentDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExperimentDetailsQuery, GetExperimentDetailsQueryVariables>(GetExperimentDetailsDocument, options);
        }
export type GetExperimentDetailsQueryHookResult = ReturnType<typeof useGetExperimentDetailsQuery>;
export type GetExperimentDetailsLazyQueryHookResult = ReturnType<typeof useGetExperimentDetailsLazyQuery>;
export type GetExperimentDetailsQueryResult = Apollo.QueryResult<GetExperimentDetailsQuery, GetExperimentDetailsQueryVariables>;
export const GetUserDocument = gql`
    query getUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetSoftwareDocument = gql`
    query getSoftware {
  software {
    data {
      ...SoftwareData
    }
  }
}
    ${SoftwareDataFragmentDoc}`;

/**
 * __useGetSoftwareQuery__
 *
 * To run a query within a React component, call `useGetSoftwareQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSoftwareQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSoftwareQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSoftwareQuery(baseOptions?: Apollo.QueryHookOptions<GetSoftwareQuery, GetSoftwareQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSoftwareQuery, GetSoftwareQueryVariables>(GetSoftwareDocument, options);
      }
export function useGetSoftwareLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSoftwareQuery, GetSoftwareQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSoftwareQuery, GetSoftwareQueryVariables>(GetSoftwareDocument, options);
        }
export type GetSoftwareQueryHookResult = ReturnType<typeof useGetSoftwareQuery>;
export type GetSoftwareLazyQueryHookResult = ReturnType<typeof useGetSoftwareLazyQuery>;
export type GetSoftwareQueryResult = Apollo.QueryResult<GetSoftwareQuery, GetSoftwareQueryVariables>;
export const GetDeviceTypesDocument = gql`
    query getDeviceTypes {
  device_types {
    data {
      ...DeviceTypeData
    }
  }
}
    ${DeviceTypeDataFragmentDoc}`;

/**
 * __useGetDeviceTypesQuery__
 *
 * To run a query within a React component, call `useGetDeviceTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeviceTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeviceTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDeviceTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetDeviceTypesQuery, GetDeviceTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeviceTypesQuery, GetDeviceTypesQueryVariables>(GetDeviceTypesDocument, options);
      }
export function useGetDeviceTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeviceTypesQuery, GetDeviceTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeviceTypesQuery, GetDeviceTypesQueryVariables>(GetDeviceTypesDocument, options);
        }
export type GetDeviceTypesQueryHookResult = ReturnType<typeof useGetDeviceTypesQuery>;
export type GetDeviceTypesLazyQueryHookResult = ReturnType<typeof useGetDeviceTypesLazyQuery>;
export type GetDeviceTypesQueryResult = Apollo.QueryResult<GetDeviceTypesQuery, GetDeviceTypesQueryVariables>;
export const GetDeviceConfigDocument = gql`
    query getDeviceConfig($configInput: ConfigInput) {
  GetConfigByDeviceType(configInput: $configInput) {
    items {
      scriptName
      items {
        name
        rules
        type
        title
        placeholder
        options {
          name
          value
        }
      }
    }
  }
}
    `;

/**
 * __useGetDeviceConfigQuery__
 *
 * To run a query within a React component, call `useGetDeviceConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeviceConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeviceConfigQuery({
 *   variables: {
 *      configInput: // value for 'configInput'
 *   },
 * });
 */
export function useGetDeviceConfigQuery(baseOptions?: Apollo.QueryHookOptions<GetDeviceConfigQuery, GetDeviceConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeviceConfigQuery, GetDeviceConfigQueryVariables>(GetDeviceConfigDocument, options);
      }
export function useGetDeviceConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeviceConfigQuery, GetDeviceConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeviceConfigQuery, GetDeviceConfigQueryVariables>(GetDeviceConfigDocument, options);
        }
export type GetDeviceConfigQueryHookResult = ReturnType<typeof useGetDeviceConfigQuery>;
export type GetDeviceConfigLazyQueryHookResult = ReturnType<typeof useGetDeviceConfigLazyQuery>;
export type GetDeviceConfigQueryResult = Apollo.QueryResult<GetDeviceConfigQuery, GetDeviceConfigQueryVariables>;
export const GetDevicesDocument = gql`
    query getDevices {
  devices {
    data {
      ...DeviceData
    }
  }
}
    ${DeviceDataFragmentDoc}`;

/**
 * __useGetDevicesQuery__
 *
 * To run a query within a React component, call `useGetDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDevicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDevicesQuery(baseOptions?: Apollo.QueryHookOptions<GetDevicesQuery, GetDevicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDevicesQuery, GetDevicesQueryVariables>(GetDevicesDocument, options);
      }
export function useGetDevicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDevicesQuery, GetDevicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDevicesQuery, GetDevicesQueryVariables>(GetDevicesDocument, options);
        }
export type GetDevicesQueryHookResult = ReturnType<typeof useGetDevicesQuery>;
export type GetDevicesLazyQueryHookResult = ReturnType<typeof useGetDevicesLazyQuery>;
export type GetDevicesQueryResult = Apollo.QueryResult<GetDevicesQuery, GetDevicesQueryVariables>;
export const GetDeviceReservationStatusDocument = gql`
    query getDeviceReservationStatus($deviceId: ID!) {
  getDevice(id: $deviceId) {
    id
    is_reserved
  }
}
    `;

/**
 * __useGetDeviceReservationStatusQuery__
 *
 * To run a query within a React component, call `useGetDeviceReservationStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeviceReservationStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeviceReservationStatusQuery({
 *   variables: {
 *      deviceId: // value for 'deviceId'
 *   },
 * });
 */
export function useGetDeviceReservationStatusQuery(baseOptions: Apollo.QueryHookOptions<GetDeviceReservationStatusQuery, GetDeviceReservationStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeviceReservationStatusQuery, GetDeviceReservationStatusQueryVariables>(GetDeviceReservationStatusDocument, options);
      }
export function useGetDeviceReservationStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeviceReservationStatusQuery, GetDeviceReservationStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeviceReservationStatusQuery, GetDeviceReservationStatusQueryVariables>(GetDeviceReservationStatusDocument, options);
        }
export type GetDeviceReservationStatusQueryHookResult = ReturnType<typeof useGetDeviceReservationStatusQuery>;
export type GetDeviceReservationStatusLazyQueryHookResult = ReturnType<typeof useGetDeviceReservationStatusLazyQuery>;
export type GetDeviceReservationStatusQueryResult = Apollo.QueryResult<GetDeviceReservationStatusQuery, GetDeviceReservationStatusQueryVariables>;
export const GetDeviceByIdDocument = gql`
    query getDeviceByID($input: ID!) {
  getDevice(id: $input) {
    ...DeviceData
  }
}
    ${DeviceDataFragmentDoc}`;

/**
 * __useGetDeviceByIdQuery__
 *
 * To run a query within a React component, call `useGetDeviceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeviceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeviceByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDeviceByIdQuery(baseOptions: Apollo.QueryHookOptions<GetDeviceByIdQuery, GetDeviceByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeviceByIdQuery, GetDeviceByIdQueryVariables>(GetDeviceByIdDocument, options);
      }
export function useGetDeviceByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeviceByIdQuery, GetDeviceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeviceByIdQuery, GetDeviceByIdQueryVariables>(GetDeviceByIdDocument, options);
        }
export type GetDeviceByIdQueryHookResult = ReturnType<typeof useGetDeviceByIdQuery>;
export type GetDeviceByIdLazyQueryHookResult = ReturnType<typeof useGetDeviceByIdLazyQuery>;
export type GetDeviceByIdQueryResult = Apollo.QueryResult<GetDeviceByIdQuery, GetDeviceByIdQueryVariables>;
export const GetCameraStatusDocument = gql`
    query getCameraStatus {
  cameraStatus {
    isConnected
    status
  }
}
    `;

/**
 * __useGetCameraStatusQuery__
 *
 * To run a query within a React component, call `useGetCameraStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCameraStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCameraStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCameraStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetCameraStatusQuery, GetCameraStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCameraStatusQuery, GetCameraStatusQueryVariables>(GetCameraStatusDocument, options);
      }
export function useGetCameraStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCameraStatusQuery, GetCameraStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCameraStatusQuery, GetCameraStatusQueryVariables>(GetCameraStatusDocument, options);
        }
export type GetCameraStatusQueryHookResult = ReturnType<typeof useGetCameraStatusQuery>;
export type GetCameraStatusLazyQueryHookResult = ReturnType<typeof useGetCameraStatusLazyQuery>;
export type GetCameraStatusQueryResult = Apollo.QueryResult<GetCameraStatusQuery, GetCameraStatusQueryVariables>;
export const GetVideoStreamStatusDocument = gql`
    query getVideoStreamStatus {
  videoStreamStatus {
    isRunning
    status
  }
}
    `;

/**
 * __useGetVideoStreamStatusQuery__
 *
 * To run a query within a React component, call `useGetVideoStreamStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideoStreamStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideoStreamStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVideoStreamStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetVideoStreamStatusQuery, GetVideoStreamStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVideoStreamStatusQuery, GetVideoStreamStatusQueryVariables>(GetVideoStreamStatusDocument, options);
      }
export function useGetVideoStreamStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVideoStreamStatusQuery, GetVideoStreamStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVideoStreamStatusQuery, GetVideoStreamStatusQueryVariables>(GetVideoStreamStatusDocument, options);
        }
export type GetVideoStreamStatusQueryHookResult = ReturnType<typeof useGetVideoStreamStatusQuery>;
export type GetVideoStreamStatusLazyQueryHookResult = ReturnType<typeof useGetVideoStreamStatusLazyQuery>;
export type GetVideoStreamStatusQueryResult = Apollo.QueryResult<GetVideoStreamStatusQuery, GetVideoStreamStatusQueryVariables>;
export const CreateDeviceDocument = gql`
    mutation createDevice($input: CreateDevice) {
  createDevice(input: $input) {
    ...DeviceData
  }
}
    ${DeviceDataFragmentDoc}`;
export type CreateDeviceMutationFn = Apollo.MutationFunction<CreateDeviceMutation, CreateDeviceMutationVariables>;

/**
 * __useCreateDeviceMutation__
 *
 * To run a mutation, you first call `useCreateDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeviceMutation, { data, loading, error }] = useCreateDeviceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDeviceMutation(baseOptions?: Apollo.MutationHookOptions<CreateDeviceMutation, CreateDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDeviceMutation, CreateDeviceMutationVariables>(CreateDeviceDocument, options);
      }
export type CreateDeviceMutationHookResult = ReturnType<typeof useCreateDeviceMutation>;
export type CreateDeviceMutationResult = Apollo.MutationResult<CreateDeviceMutation>;
export type CreateDeviceMutationOptions = Apollo.BaseMutationOptions<CreateDeviceMutation, CreateDeviceMutationVariables>;
export const UpdateDeviceDocument = gql`
    mutation updateDevice($input: UpdateDevice) {
  updateDevice(input: $input) {
    ...DeviceData
  }
}
    ${DeviceDataFragmentDoc}`;
export type UpdateDeviceMutationFn = Apollo.MutationFunction<UpdateDeviceMutation, UpdateDeviceMutationVariables>;

/**
 * __useUpdateDeviceMutation__
 *
 * To run a mutation, you first call `useUpdateDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeviceMutation, { data, loading, error }] = useUpdateDeviceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDeviceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeviceMutation, UpdateDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeviceMutation, UpdateDeviceMutationVariables>(UpdateDeviceDocument, options);
      }
export type UpdateDeviceMutationHookResult = ReturnType<typeof useUpdateDeviceMutation>;
export type UpdateDeviceMutationResult = Apollo.MutationResult<UpdateDeviceMutation>;
export type UpdateDeviceMutationOptions = Apollo.BaseMutationOptions<UpdateDeviceMutation, UpdateDeviceMutationVariables>;
export const RemoveDeviceDocument = gql`
    mutation removeDevice($id: ID!) {
  removeDevice(id: $id) {
    ...DeviceData
  }
}
    ${DeviceDataFragmentDoc}`;
export type RemoveDeviceMutationFn = Apollo.MutationFunction<RemoveDeviceMutation, RemoveDeviceMutationVariables>;

/**
 * __useRemoveDeviceMutation__
 *
 * To run a mutation, you first call `useRemoveDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDeviceMutation, { data, loading, error }] = useRemoveDeviceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveDeviceMutation(baseOptions?: Apollo.MutationHookOptions<RemoveDeviceMutation, RemoveDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveDeviceMutation, RemoveDeviceMutationVariables>(RemoveDeviceDocument, options);
      }
export type RemoveDeviceMutationHookResult = ReturnType<typeof useRemoveDeviceMutation>;
export type RemoveDeviceMutationResult = Apollo.MutationResult<RemoveDeviceMutation>;
export type RemoveDeviceMutationOptions = Apollo.BaseMutationOptions<RemoveDeviceMutation, RemoveDeviceMutationVariables>;
export const UpdateSoftwareDocument = gql`
    mutation updateSoftware($input: UpdateSoftware) {
  updateSoftware(input: $input) {
    ...SoftwareData
  }
}
    ${SoftwareDataFragmentDoc}`;
export type UpdateSoftwareMutationFn = Apollo.MutationFunction<UpdateSoftwareMutation, UpdateSoftwareMutationVariables>;

/**
 * __useUpdateSoftwareMutation__
 *
 * To run a mutation, you first call `useUpdateSoftwareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSoftwareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSoftwareMutation, { data, loading, error }] = useUpdateSoftwareMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSoftwareMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSoftwareMutation, UpdateSoftwareMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSoftwareMutation, UpdateSoftwareMutationVariables>(UpdateSoftwareDocument, options);
      }
export type UpdateSoftwareMutationHookResult = ReturnType<typeof useUpdateSoftwareMutation>;
export type UpdateSoftwareMutationResult = Apollo.MutationResult<UpdateSoftwareMutation>;
export type UpdateSoftwareMutationOptions = Apollo.BaseMutationOptions<UpdateSoftwareMutation, UpdateSoftwareMutationVariables>;
export const CreateSoftwareDocument = gql`
    mutation createSoftware($input: CreateSoftware) {
  createSoftware(input: $input) {
    ...SoftwareData
  }
}
    ${SoftwareDataFragmentDoc}`;
export type CreateSoftwareMutationFn = Apollo.MutationFunction<CreateSoftwareMutation, CreateSoftwareMutationVariables>;

/**
 * __useCreateSoftwareMutation__
 *
 * To run a mutation, you first call `useCreateSoftwareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSoftwareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSoftwareMutation, { data, loading, error }] = useCreateSoftwareMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSoftwareMutation(baseOptions?: Apollo.MutationHookOptions<CreateSoftwareMutation, CreateSoftwareMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSoftwareMutation, CreateSoftwareMutationVariables>(CreateSoftwareDocument, options);
      }
export type CreateSoftwareMutationHookResult = ReturnType<typeof useCreateSoftwareMutation>;
export type CreateSoftwareMutationResult = Apollo.MutationResult<CreateSoftwareMutation>;
export type CreateSoftwareMutationOptions = Apollo.BaseMutationOptions<CreateSoftwareMutation, CreateSoftwareMutationVariables>;
export const CreateDeviceTypeDocument = gql`
    mutation createDeviceType($input: CreateDeviceType) {
  createDeviceType(input: $input) {
    ...DeviceTypeData
  }
}
    ${DeviceTypeDataFragmentDoc}`;
export type CreateDeviceTypeMutationFn = Apollo.MutationFunction<CreateDeviceTypeMutation, CreateDeviceTypeMutationVariables>;

/**
 * __useCreateDeviceTypeMutation__
 *
 * To run a mutation, you first call `useCreateDeviceTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeviceTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeviceTypeMutation, { data, loading, error }] = useCreateDeviceTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDeviceTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateDeviceTypeMutation, CreateDeviceTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDeviceTypeMutation, CreateDeviceTypeMutationVariables>(CreateDeviceTypeDocument, options);
      }
export type CreateDeviceTypeMutationHookResult = ReturnType<typeof useCreateDeviceTypeMutation>;
export type CreateDeviceTypeMutationResult = Apollo.MutationResult<CreateDeviceTypeMutation>;
export type CreateDeviceTypeMutationOptions = Apollo.BaseMutationOptions<CreateDeviceTypeMutation, CreateDeviceTypeMutationVariables>;
export const UpdateDeviceTypeDocument = gql`
    mutation updateDeviceType($input: UpdateDeviceType) {
  updateDeviceType(input: $input) {
    ...DeviceTypeData
  }
}
    ${DeviceTypeDataFragmentDoc}`;
export type UpdateDeviceTypeMutationFn = Apollo.MutationFunction<UpdateDeviceTypeMutation, UpdateDeviceTypeMutationVariables>;

/**
 * __useUpdateDeviceTypeMutation__
 *
 * To run a mutation, you first call `useUpdateDeviceTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeviceTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeviceTypeMutation, { data, loading, error }] = useUpdateDeviceTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDeviceTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeviceTypeMutation, UpdateDeviceTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeviceTypeMutation, UpdateDeviceTypeMutationVariables>(UpdateDeviceTypeDocument, options);
      }
export type UpdateDeviceTypeMutationHookResult = ReturnType<typeof useUpdateDeviceTypeMutation>;
export type UpdateDeviceTypeMutationResult = Apollo.MutationResult<UpdateDeviceTypeMutation>;
export type UpdateDeviceTypeMutationOptions = Apollo.BaseMutationOptions<UpdateDeviceTypeMutation, UpdateDeviceTypeMutationVariables>;
export const RemoveDeviceTypeDocument = gql`
    mutation removeDeviceType($input: ID!) {
  removeDeviceType(id: $input) {
    ...DeviceTypeData
  }
}
    ${DeviceTypeDataFragmentDoc}`;
export type RemoveDeviceTypeMutationFn = Apollo.MutationFunction<RemoveDeviceTypeMutation, RemoveDeviceTypeMutationVariables>;

/**
 * __useRemoveDeviceTypeMutation__
 *
 * To run a mutation, you first call `useRemoveDeviceTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDeviceTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDeviceTypeMutation, { data, loading, error }] = useRemoveDeviceTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveDeviceTypeMutation(baseOptions?: Apollo.MutationHookOptions<RemoveDeviceTypeMutation, RemoveDeviceTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveDeviceTypeMutation, RemoveDeviceTypeMutationVariables>(RemoveDeviceTypeDocument, options);
      }
export type RemoveDeviceTypeMutationHookResult = ReturnType<typeof useRemoveDeviceTypeMutation>;
export type RemoveDeviceTypeMutationResult = Apollo.MutationResult<RemoveDeviceTypeMutation>;
export type RemoveDeviceTypeMutationOptions = Apollo.BaseMutationOptions<RemoveDeviceTypeMutation, RemoveDeviceTypeMutationVariables>;
export const RemoveSoftwareDocument = gql`
    mutation removeSoftware($input: ID!) {
  removeSoftware(id: $input) {
    ...SoftwareData
  }
}
    ${SoftwareDataFragmentDoc}`;
export type RemoveSoftwareMutationFn = Apollo.MutationFunction<RemoveSoftwareMutation, RemoveSoftwareMutationVariables>;

/**
 * __useRemoveSoftwareMutation__
 *
 * To run a mutation, you first call `useRemoveSoftwareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSoftwareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSoftwareMutation, { data, loading, error }] = useRemoveSoftwareMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveSoftwareMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSoftwareMutation, RemoveSoftwareMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSoftwareMutation, RemoveSoftwareMutationVariables>(RemoveSoftwareDocument, options);
      }
export type RemoveSoftwareMutationHookResult = ReturnType<typeof useRemoveSoftwareMutation>;
export type RemoveSoftwareMutationResult = Apollo.MutationResult<RemoveSoftwareMutation>;
export type RemoveSoftwareMutationOptions = Apollo.BaseMutationOptions<RemoveSoftwareMutation, RemoveSoftwareMutationVariables>;
export const StartVideoStreamDocument = gql`
    mutation startVideoStream {
  startVideoStream {
    isRunning
  }
}
    `;
export type StartVideoStreamMutationFn = Apollo.MutationFunction<StartVideoStreamMutation, StartVideoStreamMutationVariables>;

/**
 * __useStartVideoStreamMutation__
 *
 * To run a mutation, you first call `useStartVideoStreamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartVideoStreamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startVideoStreamMutation, { data, loading, error }] = useStartVideoStreamMutation({
 *   variables: {
 *   },
 * });
 */
export function useStartVideoStreamMutation(baseOptions?: Apollo.MutationHookOptions<StartVideoStreamMutation, StartVideoStreamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StartVideoStreamMutation, StartVideoStreamMutationVariables>(StartVideoStreamDocument, options);
      }
export type StartVideoStreamMutationHookResult = ReturnType<typeof useStartVideoStreamMutation>;
export type StartVideoStreamMutationResult = Apollo.MutationResult<StartVideoStreamMutation>;
export type StartVideoStreamMutationOptions = Apollo.BaseMutationOptions<StartVideoStreamMutation, StartVideoStreamMutationVariables>;
export const StopVideoStreamDocument = gql`
    mutation stopVideoStream {
  stopVideoStream {
    isStopped
    status
  }
}
    `;
export type StopVideoStreamMutationFn = Apollo.MutationFunction<StopVideoStreamMutation, StopVideoStreamMutationVariables>;

/**
 * __useStopVideoStreamMutation__
 *
 * To run a mutation, you first call `useStopVideoStreamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopVideoStreamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopVideoStreamMutation, { data, loading, error }] = useStopVideoStreamMutation({
 *   variables: {
 *   },
 * });
 */
export function useStopVideoStreamMutation(baseOptions?: Apollo.MutationHookOptions<StopVideoStreamMutation, StopVideoStreamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StopVideoStreamMutation, StopVideoStreamMutationVariables>(StopVideoStreamDocument, options);
      }
export type StopVideoStreamMutationHookResult = ReturnType<typeof useStopVideoStreamMutation>;
export type StopVideoStreamMutationResult = Apollo.MutationResult<StopVideoStreamMutation>;
export type StopVideoStreamMutationOptions = Apollo.BaseMutationOptions<StopVideoStreamMutation, StopVideoStreamMutationVariables>;
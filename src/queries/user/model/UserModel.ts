export interface UserListRequestDTO {
  size: number;
  page: number;
  search?: string;
}

export interface UserListResponseDTO {
  data: UserResponseDTO[];
  paging: Paging;
}

export interface UserResponseDTO {
  id: number;
  userLevel: number;
  emailAddress: string;
  userId: string;
  createDate: Date;
  updateDate: Date;
  lastLoginDate: Date;
  auth: UserAuthResponseDTO;
}

export interface UserAuthResponseDTO {
  id: number;
  authName: string,
  level: number;
}

export interface Paging {
  total: number;
  page: number;
  lastPage: number;
}
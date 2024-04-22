// Generated by https://quicktype.io

import { IRequestStatus } from "../../../Shared/Utils/interfaces";

export interface ProfileSlice {
  profiles: ProfileSingle;
  status: IRequestStatus;
}

export interface ProfileSingle {
  id:            number;
  user_id:       number;
  name:          string;
  nationality:   string;
  date_of_birth: string;
  photo:         string;
  tags:          Tag[];
}

export interface Tag {
  id:   number;
  name: string;
}

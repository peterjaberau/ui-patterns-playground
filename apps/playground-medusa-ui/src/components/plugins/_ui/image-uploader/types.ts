export const ALLOW_FILE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'gif'];

export enum TransferMethod {
  all = 'all',
  local_file = 'local_file',
  remote_url = 'remote_url',
}

export enum Resolution {
  low = 'low',
  high = 'high',
}

export type ImageFile = {
  type: TransferMethod;
  _id: string;
  fileId: string;
  file?: File;
  progress: number;
  url: string;
  base64Url?: string;
  deleted?: boolean;
};

export type VisionSettings = {
  enabled: boolean;
  number_limits: number;
  detail: Resolution;
  transfer_methods: TransferMethod[];
  image_file_size_limit?: number | string;
};

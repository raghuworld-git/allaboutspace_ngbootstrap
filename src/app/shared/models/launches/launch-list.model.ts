import { Status } from '../common/status.model';

export interface LaunchList {
  id: string,
  slug: string,
  name: string,
  status: Status,
  net: string | null,
  lsp_name: string,
  //mission: string,
  //mission_type: string,
  //pad: string,
  location: string,
  //landing: string,
  //landing_success: string,
  orbit: string,
  image: string | null
}

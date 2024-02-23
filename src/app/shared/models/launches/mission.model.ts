import { Status } from "../common/status.model";

export interface Mission {
    id: number;
    name: string;
    description: string;
    type: string;
    orbit: Status
}
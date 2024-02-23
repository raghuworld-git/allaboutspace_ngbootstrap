import { Status } from "../common/status.model";
import { Launch_service_provider } from "./launch_service_provider.model";
import { Mission } from "./mission.model";
import { Pad } from "./pad.model";
import { Rocket } from "./rocket.model";

export interface LaunchDetail {
    id: string;
    name: string;
    status: Status;
    net: string | null;
    net_converted :string | null;
    weather_concerns: string | null;
    holdreason: string | null;
    failreason: string | null;
    launch_service_provider : Launch_service_provider | null;
    rocket : Rocket | null;
    mission : Mission | null;
    pad : Pad | null;
    image : string | null;
}
import { PersonDetails } from "./details";
import { Message } from "./message";
import { AdditionalInfo } from "./additionalInfo";

export type FormData = PersonDetails & Message & AdditionalInfo;

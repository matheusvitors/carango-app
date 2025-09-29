import { HttpStatusCode } from "@/application/types";

export interface HttpError {
	status: HttpStatusCode;
	message: string;
}

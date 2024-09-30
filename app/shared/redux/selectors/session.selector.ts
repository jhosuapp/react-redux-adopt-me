import { useSelector } from "react-redux";
import { SessionModel } from "../models/session.model";

interface ISession {
    session: SessionModel;
}

export function useGetSessionSelector(): SessionModel {
    return useSelector((state: ISession) => state.session);
}

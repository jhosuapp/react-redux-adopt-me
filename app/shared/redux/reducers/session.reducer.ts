import createReducer from "./create.reducer";
import { SessionTypes } from "../types/session.type";
import { SessionModel } from "../models/session.model";
import { PayloadAction } from "@reduxjs/toolkit";

export const sessionInitialState: SessionModel = {
    token: '',
    id: NaN,
    username: '',
};

const sessionHandler = {
    [SessionTypes.save](
        state: SessionModel,
        action: PayloadAction<SessionModel>
    ) {
        const {
            token,
            id,
            username,
        } = action.payload;
        return {
            ...state,
            token: token,
            id: id,
            username: username
        };
    },
    [SessionTypes.delete]() {
            return sessionInitialState;
    },
};

export const session = createReducer(sessionInitialState, sessionHandler);

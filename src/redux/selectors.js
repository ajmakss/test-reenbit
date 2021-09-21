import { createSelector } from "reselect";

export const getUsers = state => state.users.users;
export const getDialogs = state => state.dialogs.dialogs;
export const getAuthUser = state => state.auth.userId;

export const sortDialogsByDate = createSelector(getDialogs,
    (dialogs) => {
        return dialogs.sort((a, b) => {
            return new Date(b.messages[b.messages.length - 1].createdAt) - new Date(a.messages[a.messages.length - 1].createdAt)
        });
    }
)

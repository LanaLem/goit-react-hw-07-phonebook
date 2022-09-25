import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    },
    reducers: {
        addContact: {
            reducer(state, { payload }) {
                state.items.push(payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid()
                    },
                };
            },
        },
        deleteContact: ({ state }, { payload }) => {
            state.items = state.items.filter(item => item.id !== payload);
        },
        addFilter: (state, { payload }) => {
            state.filter = payload;
        }
    },
});

export const { addContact, deleteContact, addFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
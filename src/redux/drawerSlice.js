import { createSlice } from '@reduxjs/toolkit'


const drawerSlice = createSlice({
    name: 'drawer',
    initialState: { isOpen: false, variant: null, idToEdit:null },
    reducers: {
        openDrawerNew: () => ({ isOpen: true, variant: 'new' }),
        openDrawerEdit: (_, action) => ({ isOpen: true, variant: 'edit', idToEdit: action.payload }),
        closeDrawer: () => ({ isOpen: false, variant: null, }),

    },
})


export const { openDrawerEdit, openDrawerNew, closeDrawer } = drawerSlice.actions

export default drawerSlice.reducer
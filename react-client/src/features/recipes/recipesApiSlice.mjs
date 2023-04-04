import {
    createSelector,
    createEntityAdapter
}   from '@reduxjs/toolkit';
import { apiSlice } from '../../app/api/apiSlice.mjs';

const recipesAdapter = createEntityAdapter({});
const initialState = recipesAdapter.getInitialState();
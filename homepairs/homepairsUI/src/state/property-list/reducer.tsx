import {
    PropertyListState,
    PropertyListAction,
    AddPropertyAction,
    RemovePropertyAction,
    UpdatePropertyAction,
    FetchPropertyAndPropertyManagerAction,
    SetSelectedPropertyAction,
    FetchPropertiesAction,
} from '../types';
import { PROPERTY_LIST_ACTION_TYPES } from './actions';

/**
 * A reducer is a pure function that takes the previous state and
 * an action as arguments and returns a new state. The reducer is
 * instrumental in keeping the current state of friends updated
 * throughout our app as it changes.
 * */


export const initialState: PropertyListState = {
    selectedPropertyIndex: null,
    properties: [],
    appliances: [],
    propertyManager: null,
};

// TODO: Make sure any updates to the local storage occur here!!! This way it will always have an updated property list
export const properties = (
    state: PropertyListState = initialState,
    action: PropertyListAction,
) => {
    /* * NOTE: USE IMMUTABLE UPDATE FUNCTIONS FOR REDUCERS OR ELSE REDUX WILL NOT UPDATE!!! * */
    const newState = { ...state };
    let property = null;
    let updateIndex: number = null;
    let updatedPropertyList = [];

    switch (action.type) {
        case PROPERTY_LIST_ACTION_TYPES.ADD_PROPERTY:
            // pay attention to type-casting on action
            property = (action as AddPropertyAction).userData;
            updatedPropertyList = [...state.properties, property];
            return {
                ...newState,
                selectedPropertyIndex: null,
                properties: updatedPropertyList,
            };
        case PROPERTY_LIST_ACTION_TYPES.REMOVE_PROPERTY:
            updateIndex = (action as RemovePropertyAction).index;
            updatedPropertyList = newState.properties.filter(
                (_item, propIndex) => propIndex !== updateIndex,
            );
            return {
                ...newState,
                selectedPropertyIndex: null,
                properties: updatedPropertyList,
            };
        case PROPERTY_LIST_ACTION_TYPES.UPDATE_PROPERTY:
            property = (action as UpdatePropertyAction).userData;
            updateIndex = (action as UpdatePropertyAction).index;
            state.properties.forEach((item, index) => {
                if (index === updateIndex) {
                    // This isn't the item we care about - keep it as-is
                    updatedPropertyList.push(property);
                }else{
                    // Otherwise, this is the one we want - return an updated value
                    updatedPropertyList.push(item);
                }
            });
            return {
                ...newState,
                selectedPropertyIndex: updateIndex,
                properties: updatedPropertyList,
            };
        case PROPERTY_LIST_ACTION_TYPES.FETCH_PROPERTY_AND_PROPERTY_MANAGER:
            return {
                ...newState,
                selectedPropertyIndex: null,
                properties: (action as FetchPropertyAndPropertyManagerAction).property,
                propertyManager: (action as FetchPropertyAndPropertyManagerAction).propertyManager,
            };
        case PROPERTY_LIST_ACTION_TYPES.FETCH_PROPERTIES:
            return {
                ...newState,
                selectedPropertyIndex: null,
                properties: (action as FetchPropertiesAction).properties,
            };
        case PROPERTY_LIST_ACTION_TYPES.SET_SELECTED_PROPERTY:
            return {
                ...newState,
                selectedPropertyIndex: (action as SetSelectedPropertyAction).index,
            };
        default:
            return state;
    }
};

import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

/* 
When you import this function 'setSearchField' from action.js it 
will return an object with properties, type and payload
This will be pass a "action" in the Reducer.js 
export const searchRobots = (state= initialStateSearch, action={})
Then the properties of this object initialStateSearch.searchField
is set with whatever action.payload has
*/
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

/* 
When you import this function 'requestRobots' from action.js it 
will return an a function (higher order), will need Redux Thunk Middleware
to interpert this.
The  '= () => (dispatch) =>' instead of '= (dispatch) =>', means
it is a function that returns anther function
This function will also return an object with type and payload, 
which in Reducer.js, it will be use as action in
 export const requestRobots = (state=initialStateRobots, action={}) => {
to set the initialStateRobots.robots and initialStateRobots.isPending.
The requestRobots is a callback, which eventually returns a object with type
and payload, which will be used in the Reducer.js
This function gets dispatch to the Reducer, and only after the callback is run
it returns the object, whereas above the object is used immediately after
the event occurs. 
*/
export const requestRobots = () => (dispath) => {
  dispath({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data => dispath({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispath({ type: REQUEST_ROBOTS_FAILED, payload: error }));
}

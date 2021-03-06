// user action type
export const authenticate = 'AUTHENTICATE_USER';
export const clearUser = 'CLEAR_USER';
export const removeFromUsers = 'REMOVE_FROM_USERS';
export const viewUsers = 'VIEW_USERS';

// cart action types
export const addToCart = 'ADD_TO_CART';
export const removeFromCart = 'REMOVE_FROM_CART'
export const removeFromOrders = 'REMOVE_FROM_ORDERS'
export const addOrder = 'ADD_ORDER';
export const getOrders = 'GET_ORDERS';

// contact messages action types
export const removeFromContactMessage = 'REMOVE_FROM_CONTACT_MESSAGES'

// location action types
export const getLocations = 'GET_LOCATIONS';
export const removeFromLocation = 'REMOVE_FROM_LOCATION';
export const removeSuccess = 'REMOVE_SUCCESS'
export const getRegions = 'GET_REGIONS';
export const getTowns = 'GET_TOWNS';
export const addLocation = 'ADD_LOCATION';

//contact actions types
export const addContact = 'ADD_CONTACT';
export const getContacts = 'GET_CONTACTS'
export const removeContact = 'REMOVE_CONTACT'

//chat action types
export const getMessages = 'GET_MESSAGES';
export const sendMessage = 'SEND_MESSAGE';
export const getUsers = 'GET_USERS';

//recipes action types
export const getRecipes = 'GET_RECIPES';
export const isUploading = 'IS_UPLOADING';
export const removeIsUploading = 'REMOVE_IS_LOADING';
export const removeRecipe = 'REMOVE_RECIPE'
export const setEditRecipe = 'EDIT_RECIPE'
export const getRecipesByStatus = 'GET_RECIPES_BY_STATUS';

//analysis action types
export const getAnalysis = 'GET_ANALYSIS';

//unknown action type
export const unknown = 'UNKNOWN'
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import rootReducer from './reducer/userReducer';

const newUser = [];
const doctorList = [
  {doctorID: 9876, doctorName: "Jon Tern", doctorPosition: "dentist"}, 
  {doctorID: 9877, doctorName: "Mary Smith", doctorPosition: "dentist"},
  {doctorID: 9878, doctorName: "Alex Smirnov", doctorPosition: "dentist"},
  {doctorID: 9879, doctorName: "Anna Braun", doctorPosition: "dentist"}
]
const initialState = {
  userReducer: {user: newUser},
  doctorReducer: {doctor: doctorList}
}


const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  
  export const store = createStore(
    persistedReducer,
    initialState,
    composedEnhancers,
  );
  
  export const persistor = persistStore(store);
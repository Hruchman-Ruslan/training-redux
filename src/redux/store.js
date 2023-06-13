//=============== Before ========================

// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

//=============== After ========================
import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer, tasksReducer } from './reducer';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

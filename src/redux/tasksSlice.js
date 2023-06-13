import { createSlice, nanoid } from '@reduxjs/toolkit';

const taskInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: taskInitialState,
  reducers: {
    addTask: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, { payload }) {
      const index = state.findIndex(task => task.id === payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, { payload }) {
      for (const task of state) {
        if (task.id === payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted0 } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

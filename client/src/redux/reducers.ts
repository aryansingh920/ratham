//reducers.ts
import counterReducer from "./reducers/counterReducer";

interface RootState {
  counter: number; // Update with the actual state type managed by the counterReducer
}

const reducers = {
  counter: counterReducer,
};

export default reducers;
export type RootAppState = RootState;

import { Slot } from "expo-router";
import { StoreProvider, action, createStore } from "easy-peasy";

const rootStore = createStore({
  ingredients: {},
  addIngredient: action((state, payload) => {
    state.ingredients.push(payload);
  }),
});

export default function App() {
  return (
    <StoreProvider store={rootStore}>
      <Slot />
    </StoreProvider>
  );
}

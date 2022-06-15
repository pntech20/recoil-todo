import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const todoListState = atom({
  key: "TodoList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "Show All",
  effects_UNSTABLE: [persistAtom],
});

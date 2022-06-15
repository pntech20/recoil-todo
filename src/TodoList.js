import { filteredTodoListState } from "./recoil/selectors";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      {todoList.map((todo, index) => (
        <TodoItem key={index} item={todo} />
      ))}
    </>
  );
}

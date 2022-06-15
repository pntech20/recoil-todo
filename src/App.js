import "./App.css";
import TodoList from "./TodoList";
import TodoCreator from "./TodoCreator";
import TodoFilters from "./TodoFilters";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <div className="App">
          <TodoCreator />
          <TodoFilters />
          <TodoList />
        </div>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;

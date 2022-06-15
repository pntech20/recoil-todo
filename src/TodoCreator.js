import { v4 } from "uuid";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./recoil/atoms";
import { Input, Box, Button } from "@chakra-ui/react";

export default function TodoCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: v4(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <Box bg="white" color="black">
      <Input type="text" onChange={onChange} value={inputValue} />
      <Button onClick={addItem}>Add</Button>
    </Box>
  );
}

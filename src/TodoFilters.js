import { useRecoilState } from "recoil";
import { todoListFilterState } from "./recoil/atoms";
import { Select } from "@chakra-ui/react";

export default function TodoFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <Select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </Select>
    </>
  );
}

import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync} from "../redux/todoSlice";

const TodoList = () => {
  const [filterComplete, setFilterComplete] = useState(true);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos); //name: todos of store
  const filter = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const FilterComplete = () => {
    setFilterComplete(false);
  };
  const StopFilterComplete = () => {
    setFilterComplete(true);
  };
  if (filterComplete) {
    return (
      <div>
        <button onClick={FilterComplete}>Filter complete</button>
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </ul>
      </div>
    );
  }else{
    return (
      <div>
        <button onClick={StopFilterComplete}>Filter complete</button>
        <ul className="list-group">
          {filter.map((todo) => (
            <TodoItem
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default TodoList;

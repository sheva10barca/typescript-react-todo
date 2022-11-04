import React, { useContext } from "react";

import TodoItem from "../todoItem/TodoItem";
import { TodosContext } from "../../store/todos-context";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
   const TodosCtx = useContext(TodosContext);

   return (
      <ul className={classes.todos}>
         {TodosCtx.items.map((item) => (
            <TodoItem
               key={item.id}
               text={item.text}
               onRemoveTodo={TodosCtx.removeTodo.bind(null, item.id)}
            />
         ))}
      </ul>
   );
};

export default Todos;

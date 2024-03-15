import { useCallback, useRef, useState } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {id:1, text:"리액트 기초 알아보기", checked: true,},
    {id:2, text:"리액트 스타일링 해보기", checked: true,},
    {id:3, text:"일정 관리 앱 만들어 보기", checked: false,},
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current, 
        text, 
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current +=1;
    }, [todos],
  ); 

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo=> todo.id !== id));
    }, [todos],
  )
  
  const onToggle = useCallback(
    id => {
      setTodos(todos.map(todo => todo.id === id? 
          {...todo, checked: !todo.checked} : todo,),);
    }, [todos],
  )
  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
  );
}

export default App;

import { DangerButton } from '@/components/common/DangerButton';
import { Input } from '@/components/ui/input';

interface Todo {
  title: string;
}

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="divide-y">
      {todos.map((todo, index) => (
        <li className="flex items-center justify-between space-y-2 py-4" key={index}>
          <label className='flex items-center space-x-2'>
            <span><Input type='checkbox'/></span>
            <span>{todo.title}</span>
          </label>
          <DangerButton type="submit">タスクを消去</DangerButton>
        </li>
      ))}
    </ul>
  )
}

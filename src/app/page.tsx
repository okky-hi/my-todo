// import { AddTodo } from '@/components/common/AddTodo';
// import { TodoList } from '@/components/common/TodoList';

// export default function Home() {
//   const todos = [
//     { title: 'タスク1' },
//     { title: 'タスク2' },
//     { title: 'タスク3' },
//   ]
//   return (
//     <main className="container mx-auto px-12">
//       <div className="z-10 w-full items-center justify-between py-6 font-mono text-sm lg:flex">
//         <h1 className="text-4xl font-bold">MY TODO</h1>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://github.com/okky-hi/my-todo"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             By hiokky
//           </a>
//         </div>
//       </div>

//       <div>
//         <h2 className="text-2xl font-semibold">タスクの追加</h2>
//         <div className="mt-4">
//           <AddTodo />
//         </div>
//       </div>

//       <div className="mt-10">
//         <h2 className="text-2xl font-semibold">タスク一覧</h2>
//         <div className='md:container'>
//           <TodoList todos={todos} />
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";
import { useState } from 'react';
import { AddTodo } from '@/components/common/AddTodo';
import { TodoList } from '@/components/common/TodoList';

export default function TodoApp() {
  const [todos, setTodos] = useState<{ title: string }[]>([]);

  const addTodo = (title: string) => {
    setTodos([...todos, { title }]);
  };

  return (
    <main className="container mx-auto px-12">
      <div className="z-10 w-full items-center justify-between py-6 font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">MY TODO</h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/okky-hi/my-todo"
            rel="noopener noreferrer"
            target="_blank"
          >
            By hiokky
          </a>
        </div>
      </div>


      <div className='flex flex-col space-y-4'>
        <h2 className="text-2xl font-semibold">タスクの追加</h2>
        <AddTodo onAddTodo={addTodo} />
      </div>
      <div className="flex flex-col space-y-4 mt-10">
        <h2 className="text-2xl font-semibold">タスク一覧</h2>
        <TodoList todos={todos} />
      </div>
    </main>
  );
}

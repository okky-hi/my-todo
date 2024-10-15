// "use client";
// import { ComponentProps, forwardRef, useState } from 'react';
// import { PrimaryButton } from '@/components/common/PrimaryButton';
// import { Input } from '@/components/ui/input';

// type InputProps = ComponentProps<typeof Input>

// const AddTodo = forwardRef<HTMLInputElement, InputProps>(({ className, ...others }: InputProps, ref) => {
//   const [inputValue, setInputValue] = useState('')

//   return (
//     <form onSubmit={(e) => e.preventDefault()} className="flex items-center space-x-2">
//       <Input
//         className="w-full rounded-lg border p-4 md:w-1/3"
//         placeholder="タスクを入力"
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         {...others}
//         ref={ref}
//       />
//       <PrimaryButton type="submit">タスクを追加</PrimaryButton>
//     </form>
//   );
// });

// AddTodo.displayName = 'AddTodo';

// export { AddTodo };




"use client";
import { ComponentProps, forwardRef, useState } from 'react';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { Input } from '@/components/ui/input';

type InputProps = ComponentProps<typeof Input>

interface AddTodoProps extends InputProps {
  onAddTodo: (title: string) => void;
}

const AddTodo = forwardRef<HTMLInputElement, AddTodoProps>(({ className, onAddTodo, ...others }: AddTodoProps, ref) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo();
      }}
      className="flex items-center space-x-2"
    >
      <Input
        className="w-full rounded-lg border p-4 md:w-1/3"
        placeholder="タスクを入力"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        {...others}
        ref={ref}
      />
      <PrimaryButton type="submit">タスクを追加</PrimaryButton>
    </form>
  );
});

AddTodo.displayName = 'AddTodo';

export { AddTodo };

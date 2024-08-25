import { ComponentProps, forwardRef } from 'react';

import { PrimaryButton } from '@/components/common/PrimaryButton';
import { Input } from '@/components/ui/input';

type InputProps = ComponentProps<typeof Input>;

const Form = forwardRef<HTMLInputElement, InputProps>(({ className, ...others }: InputProps, ref) => {
  return (
    <form className="flex items-center space-x-2">
      <Input
        className="w-full rounded-lg border p-4 md:w-1/3"
        placeholder="タスクを入力"
        type="text"
        {...others}
        ref={ref}
      />
      <PrimaryButton>タスクを追加</PrimaryButton>
    </form>
  );
});

Form.displayName = 'Form';

export { Form };

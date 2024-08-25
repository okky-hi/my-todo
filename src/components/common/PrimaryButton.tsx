import { ComponentProps, forwardRef } from 'react';

import { Button } from '@/components/ui/button';

type ButtonProps = ComponentProps<typeof Button>;

const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...others }: ButtonProps, ref) => {
  const cn = `p-4 bg-slate-900 text-white rounded-lg ${className || ''}`;

  return (
    <Button className={cn} type="submit" value="タスクを追加" {...others} ref={ref}>
      {others.children}
    </Button>
  );
});

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };

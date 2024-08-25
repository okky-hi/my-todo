import { ComponentProps, forwardRef } from 'react';

import { Button } from '@/components/ui/button';

type ButtonProps = ComponentProps<typeof Button>;

const DangerButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...others }: ButtonProps, ref) => {
  const cn = `p-4 rounded-lg bg-rose-500 text-white hover:bg-rose-700 ${className || ''}`;

  return (
    <Button className={cn} type="submit" value="タスクを消去" {...others} ref={ref}>
      {others.children}
    </Button>
  );
});

DangerButton.displayName = 'SecondaryButton';

export { DangerButton };

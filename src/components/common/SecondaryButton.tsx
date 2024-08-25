import { ComponentProps, forwardRef } from 'react';

import { Button } from '@/components/ui/button';

type ButtonProps = ComponentProps<typeof Button>;

const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...others }: ButtonProps, ref) => {
  const cn = `p-4 border border-slate-900 bg-white text-slate-900 rounded-lg hover:text-white ${className || ''}`;

  return (
    <Button className={cn} type="submit" value="タスクを追加" {...others} ref={ref}>
      {others.children}
    </Button>
  );
});

SecondaryButton.displayName = 'SecondaryButton';

export { SecondaryButton };

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { GlobalDialogProps } from './GlobalDialogProps';

export function GlobalDialog({
  isOpen,
  alertDialogClassNames,
  onOpenChange,
  title,
  description,
  children,
  primaryButton,
  secondaryButton,
  dialogFooterClassNames,
}: GlobalDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          '!rounded-[35px] px-8 py-10 sm:max-w-[425px]',
          alertDialogClassNames,
        )}
        overlayClassName="bg-white/80"
        closeButtonClassName="top-6 right-6"
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {children && <div className="grid gap-6 py-4">{children}</div>}

        <DialogFooter
          className={cn('flex !flex-col gap-2', dialogFooterClassNames)}
        >
          {primaryButton && (
            <Button
              className={cn(
                'bg-primary hover:bg-primary/80 text-white',
                primaryButton?.className,
              )}
              disabled={primaryButton?.isDisabled || false}
              type={primaryButton?.type || 'button'}
              onClick={primaryButton?.onClick}
            >
              {primaryButton?.text}
            </Button>
          )}
          {secondaryButton && (
            <Button
              className={cn(
                'bg-[var(--bg-weak-50)] text-black hover:bg-[var(--bg-weak-50)]/80',
                secondaryButton.className,
              )}
              disabled={secondaryButton.isDisabled || false}
              type={secondaryButton.type || 'button'}
              onClick={secondaryButton.onClick}
            >
              {secondaryButton.text}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

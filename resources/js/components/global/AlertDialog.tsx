import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { GlobalAlertDialogProps } from './GlobalAlertDialogProps';

export const GlobalAlertDialog: React.FC<GlobalAlertDialogProps> = ({
  isOpen,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = 'Continue',
  cancelText = 'Cancel',
  alertDialogFooterClassNames,
  alertCancelClassNames,
  alertConfirmClassNames,
}) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent
        className="sm:max-w-[425px]"
        overlayClassName="bg-white/80"
      >
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={alertDialogFooterClassNames}>
          <AlertDialogCancel
            onClick={onCancel}
            className={alertCancelClassNames}
          >
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className={alertConfirmClassNames}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

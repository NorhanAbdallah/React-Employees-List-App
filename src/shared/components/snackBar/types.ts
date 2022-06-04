export interface SnackBarProps {
  isOpen: boolean;
  /**
   * if true, snackBar will be shown
   * if false, snackBar will be hidden
   */
  hideDuration: number;
  /**
   * duration until snackBar is hidden, measured in milliseconds
   */
  message: string;
  /**
   * message to be shown in the snackBar
   */
  severity: 'success' | 'info' | 'warning' | 'error';
  /**
   * The severity of the alert. This defines the color and icon used.
   */
  onClose: () => void;
  /**
   * Callback fired when the component requested to close, it'll be fired automatically after hideDuration period endsf
   */
}

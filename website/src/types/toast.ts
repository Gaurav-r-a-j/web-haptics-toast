export type Position =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

export interface ToastOptions {
  richColors: boolean;
  closeButton: boolean;
  expand: boolean;
  position: Position;
}

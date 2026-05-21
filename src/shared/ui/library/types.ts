import type { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import type { ReactNode } from 'react';

type ButtonAppearance =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'outline';
type ButtonSize = 'xs' | 'small' | 'medium' | 'large' | 'xl';

type AlertAppearance = 'success' | 'error' | 'warning' | 'info';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  overrideClass?: string;
  onClick?: () => void;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

interface AlertProps {
  appearance?: AlertAppearance;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
}

export type { ButtonProps, InputProps, AlertProps };

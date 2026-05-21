export function focusEmail(
  event: React.MouseEvent<HTMLButtonElement>,
  emailInputRef: React.RefObject<HTMLInputElement | null>,
) {
  event?.preventDefault();
  if (emailInputRef.current) {
    emailInputRef.current.focus();
  }
}

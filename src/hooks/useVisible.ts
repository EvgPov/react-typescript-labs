import { useState } from 'react';

export function useVisible(initialVisible: boolean = true) {
  const [visible, setVisible] = useState(initialVisible);

  return [visible, () => setVisible((v) => !v)] as const;
}

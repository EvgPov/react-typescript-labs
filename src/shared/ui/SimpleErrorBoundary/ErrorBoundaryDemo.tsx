import { useState } from 'react';

import { SimpleErrorBoundary } from './ SimpleErrorBoundary';
import { BrokenComponent } from './BrokenComponent';

import './SimpleErrorBoundary.css';
export function ErrorBoundaryDemo() {
  const [triggerError, setTriggerError] = useState(false);

  const resetTriggerError = () => {
    setTriggerError(false);
  };
  return (
    <div className="wrapper">
      <h2 className="title">Демонстрация Error Boundary</h2>

      <SimpleErrorBoundary onRetry={resetTriggerError}>
        <BrokenComponent occurrenceError={triggerError} />
      </SimpleErrorBoundary>

      <button className="button" onClick={() => setTriggerError(true)}>
        Broken a component
      </button>
    </div>
  );
}

export function BrokenComponent({ occurrenceError = false }: { occurrenceError?: boolean }) {
  if (occurrenceError) {
    throw new Error('Возникла ошибка внутри BrokenComponent');
  }

  return (
    <div>
      <h2 className="title">BrokenComponent работает нормально</h2>
      <p style={{ textAlign: 'center' }}>пока не нажмешь на кнопку</p>
    </div>
  );
}

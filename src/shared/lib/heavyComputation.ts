//реализация тяжелого вычисления
export function heavyComputation(countIterations: number) {
  // кличество итераций в цикле
  let funcValue: number = 0; // накопитель математических результатов
  let text: string = ''; // строка для сбора символов

  for (let i = 0; i < countIterations; i++) {
    funcValue += Math.sin(i * 0.0007) * Math.cos(i * 0.0013) + (i % 17);
    if (i % 500_000 === 0) {
      // каждые 500 000 итераций добавляем символ
      text += String.fromCharCode(97 + (funcValue % 26)); //создаёт строку из последовательности Unicode-кодов
    }
  }
  // четырехзначное число
  const result: string = (funcValue % 10_000).toFixed(0).padStart(4, '0');
  // часть строки из букв
  const fragment: string = text.substring(0, 60) + (text.length > 60 ? '...' : '');

  return { result, fragment };
}

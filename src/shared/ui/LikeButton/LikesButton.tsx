import { useState, useEffect } from 'react';
import type { LikeButtonProps } from '@/shared/types/types';
import './LikesButton.css';

export function LikesButton({
  renderButtonText = (likes) => (likes > 10 ? '❤️ Очень популярно!' : '🤍 Лайкнуть'),
}: LikeButtonProps) {
  // основное состояние для счетчика лайков
  const [countLikes, setCountLikes] = useState(0);
  // состояние для текста кнопки
  const [buttonText, setButtonText] = useState(() => renderButtonText(0));

  useEffect(() => {
    const nextText = renderButtonText(countLikes);
    setButtonText((previous) => (previous === nextText ? previous : nextText));
  }, [countLikes, renderButtonText]);

  return (
    <div className="wrapper">
      <h2 className="title">Likes button</h2>
      <p>Number of likes: {countLikes}</p>
      <button className={'button'} onClick={() => setCountLikes((prev) => prev + 1)}>
        {buttonText}
      </button>
      <button className={'button'} onClick={() => setCountLikes(0)}>
        Reset
      </button>
    </div>
  );
}

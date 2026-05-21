import { Card } from '../../entities/card/ui/Card';
import { useVisible } from '@/hooks/useVisible';

export function PlaceCard() {
  const [visible, toggleVisible] = useVisible(false);

  const textDescription =
    'Это живописный каскадный водопад Киваккакоски, где вода бурно перекатывается через нагромождения тёмных скал и порогов, создавая множество пенистых струй и мини-каскадов. Окружённый густым северным хвойным лесом, он выглядит особенно атмосферно в мягком дневном свете, подчёркивая дикую и нетронутую красоту карельской природы.';

  return (
    <div className="wrapper" style={{ border: 'none' }}>
      <Card
        title="Водопад Киваккакоски на реке Оланга в национальном парке Паанаярви"
        description={visible ? textDescription : ''}
        imageUrl="src/assets/images/Водопад.JPG"
        onDetailsClick={toggleVisible}
        isDelailsVisible={visible}
      />
    </div>
  );
}

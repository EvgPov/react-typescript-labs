import { Card } from '@/entities/card/ui/Card';
import { galleryItems } from '../model/gallery_data';
import { detailsClickHandler } from '../../../entities/card/lib/handlers';

import './GalleryView.css';

export function GalleryView() {
  return (
    <div className="gallery">
      {galleryItems.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          // onDetailsClick={(event) => detailsClickHandler(event, item.title, item.description)}
          onDetailsClick={(event) => detailsClickHandler(event, item.title, item.description)}
        />
      ))}
    </div>
  );
}

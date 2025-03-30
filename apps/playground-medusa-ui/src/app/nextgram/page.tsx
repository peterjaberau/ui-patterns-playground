'use client';
import Link from 'next/link';

export default function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {photos.map((id) => (
        <Link className="card" key={id} href={`/nextgram/photos/${id}`} passHref onClick={(e) => e.stopPropagation()}>
          {id}
        </Link>
      ))}
    </section>
  );
}

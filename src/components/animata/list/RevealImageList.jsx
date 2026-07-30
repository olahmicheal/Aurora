import RevealImage from './RevealImage';

export default function RevealImageList({ items, className = '' }) {
  return (
    <div className={`flex flex-col gap-1 rounded-2xl bg-white px-6 py-4 ${className}`}>
      {items.map((item, index) => (
        <RevealImage key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}
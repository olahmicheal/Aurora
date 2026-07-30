const footerImages = [
  {
    src: '/Images-20260727T192134Z-1-001/Images/Group 39485.png',
    alt: 'Paypulse',
  },
  {
    src: '/Images-20260727T192134Z-1-001/Images/Circle.png',
    alt: 'EventSpace',
  },
  {
    src: '/Images-20260727T192134Z-1-001/Images/Circle 2.png',
    alt: 'Store.com',
  },
  {
    src: '/Images-20260727T192134Z-1-001/Images/Circle 3.png',
    alt: 'Elevana',
  },
  {
    src: '/Images-20260727T192134Z-1-001/Images/Circle 4.png',
    alt: 'Pre-chips',
  },
];

export default function ShapeShifter({
  className = '',
  containerClassName = '',
  children,
  imageSrc,
  imageAlt = 'Footer image',
}) {
  return (
    <div
      className={`group/shifter flex min-h-64 w-full min-w-fit flex-col items-center justify-center gap-3 font-bold transition-all sm:flex-row sm:text-xl ${containerClassName}`}
    >
      <div
        className={`relative shape-shifter overflow-hidden bg-black p-0 transition-all ease-in-out ${className}`}
        style={{ animationDuration: '8s' }}
      >
        {children ?? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
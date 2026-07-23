// components/PhoneFrame.tsx
import Image from 'next/image'

export default function PhoneFrame({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  return (
    <div className="relative mx-auto w-[280px] h-[500px] rounded-[2.5rem] bg-neutral-900 p-3 shadow-2xl">
      {/* notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-900 rounded-b-2xl z-20" />

      {/* side buttons (optional detail) */}
      <div className="absolute -left-[2px] top-24 w-[3px] h-8 bg-neutral-800 rounded-l" />
      <div className="absolute -left-[2px] top-36 w-[3px] h-12 bg-neutral-800 rounded-l" />
      <div className="absolute -right-[2px] top-32 w-[3px] h-16 bg-neutral-800 rounded-r" />

      {/* screen */}
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="280px"
        />
      </div>
    </div>
  )
}
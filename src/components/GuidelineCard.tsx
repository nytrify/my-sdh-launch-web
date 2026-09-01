'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export default function ProductCard({ title, imageSrc, imageAlt, href }: ProductCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group relative flex flex-col bg-[#f5f5f7] rounded-2xl p-6 pt-8 h-[125px] overflow-hidden transition-colors hover:bg-[#efeff1]"
    >

      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-[#15396B]/60 group-hover:bg-[#15396B]/90 transition-colors duration-300" />

      {/* <h3 className="relative z-10 text-lg font-bold font-sans text-white text-center">
        {title}
      </h3>

      <div className="relative z-10 mt-auto self-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-black text-white text-xs font-semibold font-sans px-4 py-2 rounded-full whitespace-nowrap">
          Click Here
        </span>
      </div> */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1 className="text-white font-sans md:text-2xl font-bold absolute group-hover:opacity-0 transition-opacity duration-300">
          {title}
        </h1>
        <div className="flex-column">
          <div className="relative z-10 mt-auto self-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-transparant text-white text-sm font-semibold font-sans px-4 py-2 rounded-full whitespace-nowrap border">
              Click Here
            </span>
          </div>
        </div>
      </div>      
    </Link>
  );
}
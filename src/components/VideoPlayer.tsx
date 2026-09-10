'use client'

import dynamic from 'next/dynamic'
import 'plyr-react/plyr.css'

const Plyr = dynamic(
  () => import('plyr-react').then((mod) => mod.Plyr),
  { ssr: false }
)

export default function VideoPlayer({src}: {src: string}) {
  return (
    <video controls className="w-full rounded-lg" playsInline>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
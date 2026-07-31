'use client'

import dynamic from 'next/dynamic'
import 'plyr-react/plyr.css'

const Plyr = dynamic(
  () => import('plyr-react').then((mod) => mod.Plyr),
  { ssr: false }
)

export default function VideoPlayer({src}: {src: string}) {
  return (
    <Plyr
      source={{
        type: "video",
        sources: [
          {
            src: src,
            type: "video/mp4",
          },
        ],
      }}
    />
  );
}
import PhoneFrame from "./PhoneFrame";
import VideoPlayer from "./VideoPlayer";

export interface Feature {
  id: string;                         
  title: string;
  description: string[];               
  videoSrc: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';    
  textAlign?: 'left' | 'center';
  className?: string;               
}

export default function FeatureCard({ feature }: { feature: Feature }) {
  const {
    id,
    title,
    description,
    videoSrc,
    imageSrc,
    imageAlt,
    imagePosition = 'right',
    textAlign = 'center',
    className = '',
  } = feature;

  const reverse = imagePosition === 'left';

  return (
    <div
      id={id}
      className={`flex flex-col items-center justify-center text-center bg-[#f5f6f7] px-12 py-12 rounded-2xl scroll-mt-24 ${className}`}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center text-center gap-8 md:gap-12">
          <div
            className={`flex flex-col items-center gap-4 w-full max-w-md md:max-w-none md:flex-1
              ${reverse ? 'order-1 md:order-2' : ''}
              ${textAlign === 'left' ? 'md:items-start md:text-left' : ''}`}
          >
            <h1 className="text-2xl md:text-4xl font-bold font-sans text-[#192553]">{title}</h1>
            {description.map((paragraph, i) => (
              <p key={i} className="text-sm md:text-base font-sans text-[#192553] leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="w-full pt-2">
              <VideoPlayer src={videoSrc} />
            </div>
          </div>

          <div className={`flex-shrink-0 ${reverse ? 'order-2 md:order-1' : ''}`}>
            <PhoneFrame src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </div>
  );
}
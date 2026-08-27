export default function SectionDivider({
  label,
  position = 'top',
}: {
  label: string;
  position?: 'top' | 'bottom';
}) {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 z-20 flex justify-center items-center w-3/4
        ${position === 'top' ? 'top-0 -translate-y-1/2' : 'bottom-0 translate-y-1/2'}`}
    >
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#192553]/30 z-0" />
      <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-bold font-sans bg-[#dde4ed] px-4 py-1 rounded-lg shadow z-10">
        {label}
      </h2>
    </div>
  );
}
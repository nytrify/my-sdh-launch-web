'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function DownloadLink() {
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
    }
    // if not on '/', let the Link navigate normally — Next handles the hash on arrival
  }

  return (
    <Link href="/#download" onClick={handleClick} className="rounded border border-[#15396B] text-[#15396B] px-6 py-3 font-semibold font-sans uppercase font-medium transition hover:bg-[#15396B] hover:text-[#FFFFED]">
      Download
    </Link>
  )
}
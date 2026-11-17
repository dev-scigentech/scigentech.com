import Image from "next/image"
import { ESPA_INFO_URL, ESPA_LOGO_EN, ESPA_STRIP_LINK_LABEL, ESPA_STRIP_TEXT } from "@/lib/espa"

// EU/ESPA co-funding strip (DAILY-246). Compliance:
// - sits directly under the fixed header, above the hero, so it is visible without scrolling;
// - on the dark background the logos keep a white box with white margin around them;
// - the logo image is shown uncropped and at its native aspect ratio.
// Logo sizing is width-driven to keep the native aspect ratio (2440×285): 308px wide ≈ 36px tall (mobile),
// 411px ≈ 48px (desktop); max-w-full only ever shrinks it proportionally.
// The top padding reserves the fixed header's height (py-5 + h-10 logo = 5rem).
const NEW_TAB_HINT = "(opens in a new tab)"

export default function EspaStrip() {
  return (
    <aside className="border-b border-white/10 bg-[#0a1128] pt-20" aria-label="EU co-funding – ESPA 2021-2027">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1.5 px-4 py-1.5 sm:px-6 md:flex-row md:gap-6 md:py-3 lg:px-8">
        <a
          href={ESPA_INFO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block shrink-0 rounded-lg bg-white px-[18px] py-[10px] transition-shadow hover:shadow-[0_0_0_3px_rgba(255,255,255,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        >
          <Image
            src={ESPA_LOGO_EN.src}
            alt={ESPA_LOGO_EN.alt}
            width={ESPA_LOGO_EN.width}
            height={ESPA_LOGO_EN.height}
            priority
            className="block h-auto w-[308px] max-w-full md:w-[411px]"
          />
          <span className="sr-only">{NEW_TAB_HINT}</span>
        </a>
        <p className="text-xs leading-4 text-gray-300 md:text-sm md:leading-5">
          {ESPA_STRIP_TEXT} ·{" "}
          <a
            href={ESPA_INFO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-white underline underline-offset-2 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            {ESPA_STRIP_LINK_LABEL} <span aria-hidden="true">↗</span>
            <span className="sr-only">{NEW_TAB_HINT}</span>
          </a>
        </p>
      </div>
    </aside>
  )
}

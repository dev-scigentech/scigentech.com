import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { ESPA_INFO_URL, ESPA_LOGO_EN, ESPA_STRIP_LINK_LABEL, ESPA_STRIP_TEXT } from "@/lib/espa"

// Sits directly under the fixed header so it is visible without scrolling (DAILY-246).
// The dark spacer matches the hero background, so the transparent header looks unchanged.
export default function EspaStrip() {
  return (
    <>
      <div className="h-20 bg-[#02071a]" aria-hidden="true" />
      <aside className="border-b border-gray-200 bg-white" aria-label="EU co-funding – ESPA 2021-2027">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-4 sm:px-6 md:flex-row md:gap-8 lg:px-8">
          <Image
            src={ESPA_LOGO_EN.src}
            alt={ESPA_LOGO_EN.alt}
            width={ESPA_LOGO_EN.width}
            height={ESPA_LOGO_EN.height}
            priority
            className="block h-auto w-[640px] max-w-full"
          />
          <p className="max-w-md text-center text-sm leading-relaxed text-gray-800 md:text-left">
            {ESPA_STRIP_TEXT}{" "}
            <a
              href={ESPA_INFO_URL}
              className="inline-flex items-center gap-0.5 font-semibold text-[#02071a] underline underline-offset-2 hover:text-blue-700"
            >
              {ESPA_STRIP_LINK_LABEL}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </p>
        </div>
      </aside>
    </>
  )
}

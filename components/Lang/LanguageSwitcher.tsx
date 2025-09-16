// components/Lang/LanguageSwitcher.tsx
"use client"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Globe } from "lucide-react"

const languages = [
  { value: "en", label: "English", short: "EN" },
  { value: "de", label: "German", short: "DE" },
  { value: "fr", label: "French", short: "FR" },
  { value: "es", label: "Spanish", short: "ES" },
]

const LanguageSwitcher = ({ locale, changeLocale }: { locale: string; changeLocale: (val: string) => void }) => {
  // find active language object
  const activeLang = languages.find((lang) => lang.value === locale)

  return (
    <Select value={locale} onValueChange={changeLocale}>
      <SelectTrigger className="w-fit border font-bold rounded-md text-sm bg-white text-[#B38C49] flex items-center gap-2">
        <Globe className="h-4 w-4 mr-1 text-[#B38C49]" />
        {/* Show short code in trigger */}
        {activeLang ? activeLang.short : <SelectValue placeholder="Lang" />}
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default LanguageSwitcher

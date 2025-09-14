"use client"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Globe } from "lucide-react"

const languages = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
]

const LanguageSwitcher = ({ locale, changeLocale }: { locale: string; changeLocale: (val: string) => void }) => {
  return (
    <Select value={locale} onValueChange={changeLocale}>
      <SelectTrigger className="w-fit border font-bold rounded-md text-sm bg-white text-[#B38C49] flex items-center gap-2">
        <Globe className="h-4 w-4 mr-1 text-[#B38C49]" />
        <SelectValue placeholder="Language" />
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

export default LanguageSwitcher;
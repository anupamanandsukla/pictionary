import { Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Tooltip } from "./ui/tooltip"
import { cn } from "../utils/utils"
import { WiMoonFullSvg } from "../utils/svg"

export function ModeToggle({ className }) {
    const { setTheme, theme } = useTheme()
    const handleThemeChange = () => {
        const root = window.document.documentElement
        let index = Math.floor(Math.random() * colors.length)
        // root.style.setProperty('--primary', colors[index])
        // root.style.setProperty('--primarya', colors[index])

        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <Tooltip title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} side="bottom">
            <div className={cn('mx-3 p-1 hover:scale-125 rounded-full cursor-pointer shadow', className)} onClick={handleThemeChange}
                style={{
                    transition: 'color 1s ease',
                }}
            >
                {theme === 'light' ? <Sun className="w-4 h-4 " /> : <WiMoonFullSvg className={"w-4 h-4"} />}
            </div>
        </Tooltip>
    )
}

let colors = [
    'rgba(210, 30, 30, 1)',
    'rgba(210, 75, 30, 1)',
    'rgba(210, 105, 30, 1)',
    'rgba(210, 120, 30, 1)',
    'rgba(210, 165, 30, 1)',
    'rgba(210, 210, 30, 1)',
    'rgba(165, 210, 30, 1)',
    'rgba(120, 210, 30, 1)',
    'rgba(75, 210, 30, 1)',
    'rgba(30, 210, 30, 1)',
    'rgba(30, 210, 75, 1)',
    'rgba(30, 210, 120, 1)',
    'rgba(30, 210, 165, 1)',
    'rgba(30, 210, 210, 1)',
    'rgba(30, 165, 210, 1)',
    'rgba(30, 120, 210, 1)',
    'rgba(30, 75, 210, 1)',
    'rgba(30, 30, 210, 1)',
    'rgba(75, 30, 210, 1)',
    'rgba(165, 30, 210, 1)',
    'rgba(210, 30, 210, 1)',
    'rgba(210, 30, 165, 1)',
    'rgba(210, 30, 120, 1)',
    'rgba(210, 30, 75, 1)',
    'rgba(210, 30, 30, 1)',
]
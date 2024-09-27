import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet"
import { useMediaQuery } from "@mui/material";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
} from "../components/ui/drawer"
import { X } from "lucide-react"
export default function Modal({ open, toggleDrawer, children, side = "right", title = "sample title" }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
    <>
      {isDesktop ? <Sheet open={open} onClose={toggleDrawer}>
        <SheetContent side={side} onClose={toggleDrawer}>
          <SheetHeader className={"text-left pb-2"}>
            <SheetTitle>{title}</SheetTitle>
          </SheetHeader>
          {children}
        </SheetContent>
      </Sheet>
        : <>
          <Drawer open={open}
            preventCycle={true}
          >
            <DrawerContent className=''>
              <>
                <X className="h-4 w-4 absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape' || e.key === 'Enter') {
                      toggleDrawer()
                    }
                  }}
                  onClick={toggleDrawer}
                  tabIndex={0}
                />
                <DrawerHeader className=" flex justify-center">
                  {title}
                </DrawerHeader>
                <div className="overflow-auto">
                  {children}
                </div>
              </>
            </DrawerContent>
          </Drawer>
        </>}
    </>
  )
}

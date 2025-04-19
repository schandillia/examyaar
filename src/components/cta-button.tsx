import { cn } from "@/lib/utils"
import { LuArrowRight } from "react-icons/lu"
import Link from "next/link"
import { AnchorHTMLAttributes } from "react"

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const CTAButton = ({
  className,
  children,
  href,
  ...props
}: CTAButtonProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Link
        href={href ?? "#"}
        className={cn(
          "group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-brand-700 px-8 h-14 w-full max-w-80 text-base shadow-md hover:shadow-sm font-medium text-white transition-all duration-300 ring-2 ring-brand-700 ring-offset-2 focus:outline-none focus:ring-brand-700 focus:ring-offset-brand-700",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <LuArrowRight className="size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]" />
        </span>

        <div className="custom-ease absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[135deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
      </Link>
      <p className="text-sm text-muted-foreground tracking-tight opacity-80">
        Flexible commitment · Zero upfront costs
      </p>
    </div>
  )
}

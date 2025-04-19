import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode, ElementType } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
  as?: ElementType
}

const headingStyles = {
  h1: "text-4xl sm:text-5xl leading-tight",
  h2: "text-3xl sm:text-4xl leading-tight",
  h3: "text-2xl sm:text-3xl leading-tight",
  h4: "text-xl sm:text-2xl leading-tight",
  h5: "text-lg sm:text-xl leading-tight",
  h6: "text-base sm:text-lg leading-tight",
}

export const Heading = ({
  children,
  className,
  as: Component = "h1",
  ...props
}: HeadingProps) => {
  const baseStyles =
    "text-pretty font-heading font-semibold tracking-tight text-zinc-800 dark:text-zinc-200"
  const sizeStyles =
    headingStyles[Component as keyof typeof headingStyles] || "" // Get size styles or empty string

  return (
    <Component className={cn(baseStyles, sizeStyles, className)} {...props}>
      {children}
    </Component>
  )
}

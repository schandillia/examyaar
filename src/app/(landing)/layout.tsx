import { ReactNode } from "react"
import { Navbar } from "@/components/nav/navbar"
import Footer from "@/components/footer"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout

import { ReactNode } from 'react'
import Navigation from './navigation'
import Footer from './footer'

interface LayoutProps {
  children: ReactNode
  className?: string
  showNavigation?: boolean
  showFooter?: boolean
}

export default function Layout({ 
  children, 
  className = "min-h-screen bg-white text-black",
  showNavigation = true,
  showFooter = true 
}: LayoutProps) {
  return (
    <div className={className}>
      {showNavigation && <Navigation />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}
import { Youtube, Star } from "lucide-react"
import Link from "next/link"


const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-lg">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <Link href="/" className="text-xl font-bold text-slate-800">Thumbnail Tester</Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">
              How it Works
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
              About
            </a>
          </nav>
          
          {/* Rating Display */}
          <div className="hidden md:flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300 transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="relative">
                  <Star className="w-4 h-4 text-yellow-400" />
                  {i < 4 && (
                    <Star className="w-4 h-4 text-yellow-400 fill-current absolute top-0 left-0" />
                  )}
                  {i === 4 && (
                    <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '80%' }}>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-slate-700">4.8</span>
            <span className="text-xs text-slate-500">(103)</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 
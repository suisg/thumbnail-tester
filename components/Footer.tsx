import { Youtube } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-red-600 p-2 rounded-lg">
            <Youtube className="w-6 h-6 text-white" />
          </div>
          <p className="text-xl font-bold">Thumbnail Tester</p>
        </div>
        <p className="text-slate-400 mb-6">The ultimate tool for testing YouTube thumbnails across all devices</p>
        
        <div className="flex justify-center items-center gap-6 mb-6">
          <Link 
            href="/privacy-policy" 
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Privacy 
          </Link>
          <Link 
            href="/terms-of-use" 
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Terms
          </Link>
        </div>
        
        <p className="text-slate-500 text-sm">© 2025 Thumbnail Tester. Made with ❤️ for content creators.</p>
      </div>
    </footer>
  )
}

export default Footer 
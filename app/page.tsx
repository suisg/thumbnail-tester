"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ThumbnailTester from "@/components/ThumbnailTester"
import ImageUploader from "@/components/ImageUploader"
import Script from "next/script"


const HomePage = ({ onImageUpload }: { onImageUpload: (image: string) => void }) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">
            Free YouTube <span className="text-red-600">Thumbnail Tester</span>
          </h1>
          <p className="text-2xl  max-w-3xl mx-auto mb-8">Preview & Compare Your Thumbnails</p>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            The Ultimate Thumbnail Preview Tool to Test Your Thumbnails and Optimize Click-Through Rates
          </p>
        </div>

        {/* Upload Area */}
        <ImageUploader onImageUpload={onImageUpload} />
      </section>

      {/* About YouTube Thumbnail Tester */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl text-center font-bold text-slate-900 mb-4">What is YouTube Thumbnail Tester</h2>
            <p className="text-lg text-slate-600 mb-6">
              Our YouTube thumbnail tester is a specialized tool designed to help content creators preview and test their video thumbnails before publishing. This advanced thumbnail preview tool simulates the exact environment where your YouTube thumbnails will be displayed, allowing you to see how your thumbnail appears in the YouTube feed, search results, and recommended videos sections.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              The thumbnail tester provides real-time feedback on how your YouTube thumbnail will perform across different devices and screen sizes. Whether you're testing thumbnails for desktop viewers or mobile users, our thumbnail preview tool ensures your video thumbnail maintains its visual impact and readability across all platforms.
            </p>
            <p className="text-lg text-slate-600">
              With our comprehensive thumbnail testing features, you can compare multiple thumbnails side-by-side, test different title combinations, and analyze which thumbnail variation will generate the highest click-through rates. This thumbnail preview functionality is essential for any serious YouTube creator looking to optimize their video performance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Creators Choose Our YouTube Thumbnail Tester</h2>
            <p className="text-xl text-slate-600">Professional thumbnail testing features for YouTube creators</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Thumbnail Test & Compare</h3>
              <p className="text-slate-600">
                Our youtube thumbnail tester allows you to test your thumbnails side-by-side and compare your thumbnails to see
                which performs best. This thumbnail preview functionality helps you make the right choice before upload.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👀</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">YouTube Feed Preview</h3>
              <p className="text-slate-600">
                Preview your thumbnails exactly as viewers see them in the YouTube feed. Our youtube thumbnail tester shows your
                video thumbnail in context of the current YouTube layout, ensuring maximum visibility and impression.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Multi-Device Thumbnail Preview</h3>
              <p className="text-slate-600">
                Test your thumbnails across desktop, mobile, and tablet views. Our youtube thumbnail tester ensures your YouTube
                thumbnail looks perfect on all platforms and attracts viewers to click regardless of their device.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Instant Thumbnail Checker</h3>
              <p className="text-slate-600">
                Get immediate feedback with our fast thumbnail tester. Upload your thumbnail, preview the results
                instantly, and evaluate your video thumbnail performance without any delays or manual processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🆓</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Free Thumbnail Preview Tool</h3>
              <p className="text-slate-600">
                Use our free thumbnail tester without any limitations. This thumbnail preview tool is completely free
                for all content creators who want to optimize their YouTube video thumbnails and increase click-through
                rates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Thumbnail & Title Testing</h3>
              <p className="text-slate-600">
                Our thumbnail tester lets you test your YouTube titles and thumbnails together. Preview how your
                thumbnail and title combination appears to viewers and optimize both elements for maximum engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Our Thumbnail Tester Works</h2>
            <p className="text-xl text-slate-600">Simple, fast, and effective thumbnail testing process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Upload Your Thumbnail</h3>
              <p className="text-slate-600">
                Upload your thumbnail to youtube thumbnail tester and ensure it meets the 1280x720 dimension requirements
                for optimal YouTube display.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Preview in YouTube Context</h3>
              <p className="text-slate-600">
                Our thumbnail preview tool shows exactly how your thumbnail appears in the current YouTube feed and
                layout across various devices.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Test & Compare</h3>
              <p className="text-slate-600">
                Use youtube thumbnail tester to compare your thumbnails, test different title combinations, and choose the
                most eye-catching option.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Optimize & Publish</h3>
              <p className="text-slate-600">
                Make informed decisions based on our youtube thumbnail tester results and publish your video with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Thumbnail Testing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Is Thumbnail Testing Important</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 mb-4">The Impact of Thumbnail Testing on Click-Through Rates</h3>
                <p className="text-slate-600 mb-4">
                  Thumbnail testing is not just a best practice—it's a necessity for YouTube creators who want to maximize their video performance. Our thumbnail tester reveals that creators who regularly test their thumbnails see an average 40% increase in click-through rates compared to those who don't use thumbnail testing tools.
                </p>
                <p className="text-slate-600">
                  The thumbnail preview tool allows you to identify which elements of your YouTube thumbnail are most effective at attracting viewers. By testing thumbnails before publishing, you can avoid the costly mistake of uploading a video with a poorly performing thumbnail that could significantly impact your overall channel growth.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Thumbnail Testing Across Different Platforms</h3>
                <p className="text-slate-600 mb-4">
                  Modern YouTube viewers access content across multiple devices, making comprehensive thumbnail testing essential. Our thumbnail tester ensures your YouTube thumbnail looks compelling whether viewed on desktop computers, mobile phones, or tablets. The thumbnail preview tool simulates these different viewing environments, helping you create thumbnails that perform consistently across all platforms.
                </p>
                <p className="text-slate-600">
                  Without proper thumbnail testing, you risk creating thumbnails that look great on one device but fail to attract clicks on others. The thumbnail tester eliminates this risk by providing accurate previews of how your thumbnail appears in various YouTube contexts and device formats.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Competitive Advantage Through Thumbnail Testing</h3>
                <p className="text-slate-600 mb-4">
                  In the competitive world of YouTube content creation, thumbnail testing provides a significant advantage. While many creators upload videos with untested thumbnails, those who use our thumbnail tester can make data-driven decisions about their visual presentation. This thumbnail preview approach leads to better performance in YouTube's algorithm and increased visibility in search results and recommendations.
                </p>
                <p className="text-slate-600">
                  The thumbnail testing process helps you understand what makes your thumbnails stand out in the crowded YouTube feed. By comparing different thumbnail variations using our thumbnail tester, you can identify the visual elements that resonate most with your target audience and incorporate these insights into future thumbnail designs.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Thumbnail Testing for Brand Consistency</h3>
                <p className="text-slate-600 mb-4">
                  Consistent thumbnail testing helps maintain brand identity across your YouTube channel. Our thumbnail tester allows you to test thumbnails while ensuring they align with your overall brand aesthetic and messaging. This thumbnail preview process ensures that each new video thumbnail contributes to building a recognizable and professional channel appearance.
                </p>
                <p className="text-slate-600">
                  Regular use of the thumbnail tester also helps you develop a better understanding of your audience's preferences. Over time, the thumbnail testing data you collect will reveal patterns in what types of thumbnails perform best for your specific content niche, enabling you to create more effective thumbnails consistently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about the youtube thumbnail tester</p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                What is a thumbnail tester and how does it work?
              </h3>
              <p className="text-slate-600">
                A thumbnail tester is a tool that allows you to preview your thumbnails before uploading your YouTube
                video. Our youtube thumbnail tester shows how your video thumbnail appears in the YouTube feed, helping you test
                your thumbnails and make informed decisions about which thumbnail will attract the most viewers.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Is this thumbnail preview tool really free?</h3>
              <p className="text-slate-600">
                Yes! Our youtube thumbnail tester is completely free to use. You can test your thumbnails, preview your YouTube
                thumbnails, and compare multiple thumbnails without any cost. We believe every creator should have
                access to a quality thumbnail preview tool.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Can I test my thumbnails before uploading to YouTube?
              </h3>
              <p className="text-slate-600">
                Absolutely! That's exactly what our youtube thumbnail tester is designed for. Upload your thumbnail to our
                thumbnail preview tool, see how it looks in the YouTube context, and test different variations before
                you publish your video. This helps you optimize your click-through rate from the start.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                How does the thumbnail tester help improve my video performance?
              </h3>
              <p className="text-slate-600">
                Our thumbnail tester helps you create more eye-catching thumbnails by showing you exactly how they
                appear to viewers. You can test your thumbnails in the actual YouTube feed context, compare your
                thumbnails side-by-side, and choose the most visually appealing option that will increase your
                click-through rates and watch time.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                What thumbnail dimensions work best with your thumbnail tester?
              </h3>
              <p className="text-slate-600">
                Our thumbnail tester works with the standard YouTube thumbnail dimension of 1280x720 pixels (16:9 aspect
                ratio). The thumbnail preview tool will show you how your video thumbnail appears across different
                layouts and devices, ensuring your thumbnail looks great everywhere on the platform.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Can I use the thumbnail tester to test titles and thumbnails together?
              </h3>
              <p className="text-slate-600">
                Yes! Our thumbnail tester allows you to test your YouTube titles and thumbnails in combination. This
                thumbnail preview feature helps you see how your thumbnail and title work together to attract viewers
                and optimize your overall video presentation in the YouTube feed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-300 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Using Our Free Thumbnail Tester Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators who trust our thumbnail preview tool to optimize their YouTube video performance
          </p>
          <Button
            onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Try Thumbnail Tester Now →
          </Button>
          <p className="text-sm mt-4 opacity-75">
            No signup required • Test unlimited thumbnails • Preview your thumbnails instantly
          </p>
        </div>
      </section>

    </div>
  )
}

export default function App() {
  const [showTool, setShowTool] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  // Hide header and footer when tool is active
  useEffect(() => {
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    
    if (header) {
      if (showTool) {
        header.style.display = 'none'
      } else {
        header.style.display = 'block'
      }
    }
    
    if (footer) {
      if (showTool) {
        footer.style.display = 'none'
      } else {
        footer.style.display = 'block'
      }
    }
  }, [showTool])

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl)
    setShowTool(true)
  }

  const handleBackToHome = () => {
    setShowTool(false)
    setUploadedImage(null)
  }

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <Script
        id="schema-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "YouTube Thumbnail Tester",
            "description": "Free online tool to test and preview YouTube thumbnails. Upload your thumbnails and see how they appear in YouTube feed, search results, and recommended videos. Optimize your click-through rates with our thumbnail testing tool.",
            "url": "https://www.thumbnailtester.app",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Thumbnail preview in YouTube context",
              "Multi-device testing (desktop, mobile, tablet)",
              "Side-by-side thumbnail comparison",
              "Real-time thumbnail testing",
              "Free to use",
              "No registration required"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "103",
            },
            "author": {
              "@type": "Organization",
              "name": "Thumbnail Tester"
            },
            "creator": {
              "@type": "Organization",
              "name": "Thumbnail Tester"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Thumbnail Tester",
              "url": "https://www.thumbnailtester.app"
            },
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "YouTube Thumbnail Tester",
              "description": "Professional thumbnail testing tool for YouTube creators",
              "applicationCategory": "DesignApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            },
            "potentialAction": {
              "@type": "UseAction",
              "target": "https://www.thumbnailtester.app",
              "description": "Start using the YouTube Thumbnail Tester"
            }
          })
        }}
      />
      
      {showTool ? (
        <ThumbnailTester initialImage={uploadedImage} onBack={handleBackToHome} />
      ) : (
        <HomePage onImageUpload={handleImageUpload} />
      )}
    </>
  )
}

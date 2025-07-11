"use client"

import type React from "react"
import { useState, useEffect } from "react"
import ControlPanel from "./ControlPanel"
import PreviewPanel from "./PreviewPanel"
import { sampleVideos } from "@/lib/sampleVideos"

interface ThumbnailTesterProps {
  initialImage: string | null
  onBack: () => void
}

const ThumbnailTester: React.FC<ThumbnailTesterProps> = ({
  initialImage,
  onBack,
}) => {
  const [uploadedImageA, setUploadedImageA] = useState<string | null>(initialImage)
  const [uploadedImageB, setUploadedImageB] = useState<string | null>(null)
  const [activeDevice, setActiveDevice] = useState("desktop")
  const [previewType, setPreviewType] = useState("homepage")
  const [thumbnailPosition, setThumbnailPosition] = useState("1")
  const [channelName, setChannelName] = useState("")
  const [videoTitle, setVideoTitle] = useState("")

  // Sync channel and title edits to user videos
  useEffect(() => {
    setVideos((prev) =>
      prev.map((v) => {
        if (v.isUserVideo === "A" || v.isUserVideo === "B") {
          return {
            ...v,
            channel: channelName.trim() !== "" ? channelName : v.channel,
            title: videoTitle.trim() !== "" ? videoTitle : v.title,
          }
        }
        return v
      })
    )
  }, [channelName, videoTitle])

  // Videos list used by PreviewPanel
  const [videos, setVideos] = useState(sampleVideos)

  // Shuffle helper keeping user thumbnails within first 10 items
  const reshuffleVideos = () => {
    // Make a copy so we don't mutate state directly
    const shuffled = [...videos]

    // 1) Full Fisher–Yates shuffle – every video participates, including user uploads
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    // 2) Ensure the two user-uploaded thumbnails (A, B) are within the first 10 items
    const isUser = (v: any) => v.isUserVideo === "A" || v.isUserVideo === "B"
    // Loop through array, bring any user video outside top10 into top10 by swapping
    for (let i = 0; i < shuffled.length; i++) {
      if (i > 9 && isUser(shuffled[i])) {
        // find a non-user slot inside top10 to swap with
        for (let j = 0; j < 10; j++) {
          if (!isUser(shuffled[j])) {
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
            break
          }
        }
      }
    }

    setVideos(shuffled)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <ControlPanel
        uploadedImageA={uploadedImageA}
        setUploadedImageA={setUploadedImageA}
        uploadedImageB={uploadedImageB}
        setUploadedImageB={setUploadedImageB}
        activeDevice={activeDevice}
        setActiveDevice={setActiveDevice}
        previewType={previewType}
        onBack={onBack}
        onReshuffle={reshuffleVideos}
      />
      <PreviewPanel
        videos={videos}
        uploadedImageA={uploadedImageA}
        uploadedImageB={uploadedImageB}
        activeDevice={activeDevice}
        previewType={previewType}
      />
    </div>
  )
}

export default ThumbnailTester 
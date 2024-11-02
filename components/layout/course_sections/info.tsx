"use client"

import { ChevronDown, Copy, CircleDot  } from "lucide-react"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { toast } from "../../../hooks/use-toast"

export default function Info() {

  const [expandedLevel, setExpandedLevel] = useState<string | null>(null)

  const scheduleData = [
    { term: "HỌC KÌ MÙA XUÂN", start: "ĐẦU THÁNG 3", end: "CUỐI THÁNG 5" },
    { term: "HỌC KÌ MÙA HÈ", start: "ĐẦU THÁNG 6", end: "CUỐI THÁNG 8" },
    { term: "HỌC KÌ MÙA THU", start: "ĐẦU THÁNG 9", end: "CUỐI THÁNG 11" },
    { term: "HỌC KÌ MÙA ĐÔNG", start: "ĐẦU THÁNG 12", end: "CUỐI THÁNG 2 NĂM SAU" },
  ]

  const levels = [
    {
      id: "elementary",
      title: "SƠ CẤP",
      objectives: [
        "Đặc tính và nguyên lý nguyên âm phụ âm tiếng Hàn",
        "Cấu tạo cơ bản của câu tiếng Hàn và để có thể nói chuyện cơ bản cần thiết ở sinh hoạt đời thường"
      ],
      proficiency: "Năng lực tiếng Hàn cấp 1, cấp 2"
    },
    {
      id: "intermediate",
      title: "TRUNG CẤP",
      objectives: [
        "Để có thể giao tiếp đời thường và ngôn ngữ sinh hoạt cơ bản bằng tiếng Hàn",
        "Mở rộng tầm hiểu biết về toàn bộ văn hóa xã hội của Hàn Quốc"
      ],
      proficiency: "Năng lực tiếng Hàn cấp 3, cấp 4"
    },
    {
      id: "advanced",
      title: "CAO CẤP",
      objectives: [
        "Học tập nội dung mang tính chuyên môn và tính thời sự",
        "Học tập năng lực thảo luận và đọc hiểu tài liệu mang tính chuyên môn"
      ],
      proficiency: "Năng lực tiếng Hàn cấp 5, cấp 6"
    }
  ]

  const bankDetails = [
    { label: "Bank Name", value: "Industrial Bank of Korea, Seoul, Korea" },
    { label: "Bank Address", value: "79, EULJI-RO, JUNG-GU, SEOUL, SOUTH KOREA" },
    { label: "Swift Code", value: "IBKOKRSEXXX" },
    { label: "Account Number", value: "179-075506-01-191" },
    { label: "Account Holder", value: "Gimcheon University(Tel. +82-54-420-4190)" },
    { label: "Beneficiary Address", value: "Dahak-ro 214, Gimcheon City, Gyeongsangbuk-do, Republic of Korea(Post code: 39528)" }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      description: "Copied to clipboard",
      duration: 2000
    })
  }

  return (
    <section className='container w-full'>
        <div className='grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-7 md:py-32'>
        
        {/* Quá trình */}
        <div className='w-full flex items-center flex-col'>
          <h2 className="text-3xl md:text-4xl font-bold mb-7">
           Quá trình
          </h2>
          <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">LỊCH HỌC</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <p className="font-semibold">THỜI GIAN THU GIẢNG</p>
          <p>10 TUẦN</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {scheduleData.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-primary p-2">
                <CardTitle className="text-primary-foreground text-sm text-center">{item.term}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div>
                    <p className="font-semibold text-sm">NGÀY KHAI GIẢNG</p>
                    <p className="text-sm">{item.start}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">NGÀY KẾT THÚC</p>
                    <p className="text-sm">{item.end}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
          </Card>
        </div>

        {/* Mục tiêu */}
        <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">MỤC TIÊU HỌC TẬP</h2>
      {levels.map((level) => (
        <Card key={level.id} className="overflow-hidden">
          <Button
            variant="ghost"
            className="w-full rounded-none h-auto p-0"
            onClick={() => setExpandedLevel(expandedLevel === level.id ? null : level.id)}
          >
            <CardHeader className="w-full">
              <div className="flex items-center justify-between w-full">
                <CardTitle className="text-lg sm:text-xl">{level.title}</CardTitle>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform duration-200",
                    expandedLevel === level.id && "rotate-180"
                  )}
                />
              </div>
            </CardHeader>
          </Button>
          <CardContent
            className={cn(
              "grid transition-all duration-200 ease-in-out",
              expandedLevel === level.id ? "grid-rows-[1fr] p-6" : "grid-rows-[0fr] p-0"
            )}
          >
            <div className="overflow-hidden">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Mục tiêu:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {level.objectives.map((objective, index) => (
                      <li key={index} className="text-sm sm:text-base">{objective}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Trình độ:</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{level.proficiency}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* chi phí */}
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-primary rounded-t">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg sm:text-xl font-bold text-white">
            CHI PHÍ KHÓA HỌC TIẾNG HÀN
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="font-medium">Phí xét tuyển</div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-semibold">50,000</span>
              <span className="text-sm text-muted-foreground">won</span>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="font-medium">Học phí</div>
              <div className="text-sm text-muted-foreground">(1 năm/40 tuần)</div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-semibold">4,400,000</span>
              <span className="text-sm text-muted-foreground">won</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* học bổng */}
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-primary rounded-t">
        <div className="flex items-center gap-2">
          
          <CardTitle className="text-lg sm:text-xl font-bold text-white">
            HỌC BỔNG DÀNH CHO DU HỌC SINH
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex gap-2">
          <CircleDot className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
          <p className="text-sm sm:text-base">
            Chi trả học bổng ưu tú về điểm danh và thành tích theo từng học kì
          </p>
        </div>
      </CardContent>
    </Card>

    {/* tài khoản nộp tiền */}
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="border-b">
        <CardTitle className="text-xl font-bold text-center">Tài khoản nộp tiền</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {bankDetails.map((detail, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b last:border-0 last:pb-0"
            >
              <div className="min-w-[140px] font-medium text-muted-foreground">
                {detail.label}
              </div>
              <div className="flex-1 flex justify-between items-start gap-2">
                <div className="text-sm sm:text-base break-all">{detail.value}</div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(detail.value)}
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy {detail.label}</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    
        </div>
    </section>
  )
}

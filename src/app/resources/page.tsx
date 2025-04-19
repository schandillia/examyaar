"use client"

import { Wrapper } from "@/components/wrapper"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FiDownload, FiHeart, FiGrid, FiList } from "react-icons/fi"
import { FiStar } from "react-icons/fi" // Import the star icon for the crown overlay
import Image from "next/image"
import documents from "@/lib/data/resources.json"
import { AiFillFilePdf } from "react-icons/ai"
import PageHeader from "@/components/page-header"
import { LuCrown } from "react-icons/lu"

const boards = ["All", "CBSE", "ICSE"]
const grades = ["All", "9", "10", "11", "12"]
const subjects = [
  "All",
  "Science",
  "Mathematics",
  "History",
  "Geography",
  "English",
]
const types = [
  "All",
  "Exam Notes",
  "Revision Notes",
  "Sample Question Paper",
  "Study Guide",
]

export default function Page() {
  const [selectedBoard, setSelectedBoard] = useState("All")
  const [selectedGrade, setSelectedGrade] = useState("All")
  const [selectedSubject, setSelectedSubject] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [isGridView, setIsGridView] = useState(true)
  const [query, setQuery] = useState("")

  const filteredDocs = documents.filter((doc) => {
    return (
      (selectedBoard === "All" || doc.board === selectedBoard) &&
      (selectedGrade === "All" || doc.grade === selectedGrade) &&
      (selectedSubject === "All" || doc.subject === selectedSubject) &&
      (selectedType === "All" || doc.type === selectedType) &&
      doc.title.toLowerCase().includes(query.toLowerCase())
    )
  })

  return (
    <Wrapper className="py-6">
      <PageHeader text="Resources" />

      {/* Filters + View Toggle in same row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-4 items-center">
        <Select onValueChange={setSelectedBoard} defaultValue="All">
          <SelectTrigger>
            <SelectValue placeholder="Select Board" />
          </SelectTrigger>
          <SelectContent>
            {boards.map((board) => (
              <SelectItem key={board} value={board}>
                {board === "All" ? "All Boards" : board}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedGrade} defaultValue="All">
          <SelectTrigger>
            <SelectValue placeholder="Select Grade" />
          </SelectTrigger>
          <SelectContent>
            {grades.map((grade) => (
              <SelectItem key={grade} value={grade}>
                {grade === "All" ? "All Grades" : `Class ${grade}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedSubject} defaultValue="All">
          <SelectTrigger>
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject === "All" ? "All Subjects" : subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedType} defaultValue="All">
          <SelectTrigger>
            <SelectValue placeholder="Select Resource Type" />
          </SelectTrigger>
          <SelectContent>
            {types.map((type) => (
              <SelectItem key={type} value={type}>
                {type === "All" ? "All Types" : type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* View Toggle */}
        <div className="flex justify-end gap-2">
          <Button
            size="icon"
            variant={isGridView ? "default" : "outline"}
            onClick={() => setIsGridView(true)}
            title="Grid View"
          >
            <FiGrid className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant={!isGridView ? "default" : "outline"}
            onClick={() => setIsGridView(false)}
            title="List View"
          >
            <FiList className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Showing count */}
      {filteredDocs.length > 0 && (
        <div className="text-sm text-muted-foreground mb-4">
          Showing {filteredDocs.length} of {documents.length} items
        </div>
      )}

      {/* No Results Illustration */}
      {filteredDocs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <Image
            src="/nothing.png"
            alt="No resources found"
            width={200}
            height={200}
            className="mb-4"
          />
        </div>
      ) : (
        <>
          {/* Grid View */}
          {isGridView ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {filteredDocs.map((doc) => (
                <Card
                  key={doc.id}
                  className="group hover:shadow-lg transition-shadow rounded-xl overflow-hidden"
                >
                  <div className="relative w-full h-36">
                    <Image
                      src={doc.thumbnail}
                      alt={doc.title}
                      fill
                      className="object-cover"
                    />
                    {/* Premium Icon (Crown) */}
                    {doc.premium && (
                      <div className="absolute top-2 right-2 bg-yellow-700/60 text-white p-1 rounded shadow-sm">
                        <LuCrown className="size-4" />
                      </div>
                    )}
                    <div className="absolute top-2 left-2 bg-red-700/60 text-white p-1 rounded shadow-sm">
                      <AiFillFilePdf className="size-4" />
                    </div>
                  </div>
                  <CardContent className="p-3 flex flex-col gap-2">
                    <div className="font-medium text-sm line-clamp-2">
                      {doc.title}
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <Button size="sm" variant="outline">
                        <FiDownload className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <FiHeart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {filteredDocs.map((doc) => (
                <Card
                  key={doc.id}
                  className="group hover:shadow-md transition-shadow rounded-xl overflow-hidden"
                >
                  <div className="flex items-center justify-between px-3 gap-3 flex-wrap sm:flex-nowrap">
                    <div className="size-12 relative shrink-0 rounded overflow-hidden border-2 border-solid border-border">
                      <Image
                        src={doc.thumbnail}
                        alt={doc.title}
                        fill
                        className="object-cover"
                      />
                      {/* Premium Icon (Crown) */}
                      {doc.premium && (
                        <div className="absolute top-2 right-2 text-yellow-400">
                          <FiStar className="w-6 h-6" />
                        </div>
                      )}
                      <div className="absolute top-1 left-1 bg-red-700/60 text-white p-1 rounded shadow-sm">
                        <AiFillFilePdf className="w-3 h-3" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="font-medium text-sm sm:text-base mb-1">
                        {doc.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {doc.board} • Class {doc.grade} • {doc.subject} •{" "}
                        {doc.type}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                      <Button size="icon" variant="outline" title="Download">
                        <FiDownload className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" title="Favorite">
                        <FiHeart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </>
      )}
    </Wrapper>
  )
}

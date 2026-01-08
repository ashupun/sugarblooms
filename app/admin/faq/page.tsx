"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface FAQSubmission {
  id: string;
  name: string;
  email: string;
  question: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

// Example submissions - this would come from your database
const initialSubmissions: FAQSubmission[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    question: "Do you offer gluten-free options?",
    status: "pending",
    createdAt: "2025-08-22T14:30:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    question: "Can I order cupcakes for delivery?",
    status: "approved",
    createdAt: "2025-08-21T09:15:00Z",
  },
];

export default function AdminFAQPage() {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [selectedSubmission, setSelectedSubmission] =
    useState<FAQSubmission | null>(null);
  const [showReviewDialog, setShowReviewDialog] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleStatusUpdate = async (
    id: string,
    status: "approved" | "rejected"
  ) => {
    // Here you would typically update the status in your database
    setSubmissions(
      submissions.map((sub) => (sub.id === id ? { ...sub, status } : sub))
    );
  };

  const handleApprove = async () => {
    if (selectedSubmission && answer) {
      // Here you would typically:
      // 1. Update the submission status
      // 2. Create a new FAQ entry with the question and answer
      // 3. Notify the user their question was approved

      await handleStatusUpdate(selectedSubmission.id, "approved");
      setShowReviewDialog(false);
      setAnswer("");
      setSelectedSubmission(null);
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            FAQ Management
          </h1>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Question Submissions
            </h2>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Question</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="text-sm text-gray-700">
                        {new Date(submission.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-sm text-gray-700">
                        {submission.name}
                      </TableCell>
                      <TableCell className="text-sm text-pink-700 max-w-md">
                        {submission.question}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            submission.status === "approved"
                              ? "bg-green-100 text-green-700"
                              : submission.status === "rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        >
                          {submission.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {submission.status === "pending" && (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-green-600 border-green-200 hover:bg-green-50"
                              onClick={() => {
                                setSelectedSubmission(submission);
                                setShowReviewDialog(true);
                              }}
                            >
                              Review
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 border-red-200 hover:bg-red-50"
                              onClick={() =>
                                handleStatusUpdate(submission.id, "rejected")
                              }
                            >
                              Reject
                            </Button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Review Question</DialogTitle>
            <DialogDescription>
              Add an answer to approve this question and add it to the FAQs
            </DialogDescription>
          </DialogHeader>

          {selectedSubmission && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Question
                </label>
                <p className="text-gray-700">{selectedSubmission.question}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Your Answer
                </label>
                <Textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="min-h-[100px]"
                  placeholder="Write your answer here..."
                />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowReviewDialog(false);
                setAnswer("");
                setSelectedSubmission(null);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleApprove}
              disabled={!answer}
              className="bg-pink-600 hover:bg-pink-700 text-white rounded-full"
            >
              Approve & Add to FAQs
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

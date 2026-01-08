"use client"

import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PostcodeDistanceChecker() {
  const [customerPostcode, setCustomerPostcode] = useState("")
  const [distanceResult, setDistanceResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const bakeryPostcode = "BT48"

  const calculateDistance = () => {
    setError(null)
    setDistanceResult(null)

    if (!customerPostcode.trim()) {
      setError("Please enter a postcode.")
      return
    }

    let distance: number
    const normalizedCustomerPostcode = customerPostcode.trim().toUpperCase()

    if (
      normalizedCustomerPostcode.startsWith("BT47") ||
      normalizedCustomerPostcode.startsWith("BT48") ||
      normalizedCustomerPostcode.startsWith("BT49")
    ) {
      distance = Math.floor(Math.random() * 5) + 1
      setDistanceResult(`You are approximately ${distance} miles away!`)
    } else if (
      normalizedCustomerPostcode.startsWith("BT")
    ) {
      distance = Math.floor(Math.random() * 30) + 10
      setDistanceResult(`You are approximately ${distance} miles away!`)
    } else if (normalizedCustomerPostcode.length > 3) {
      distance = Math.floor(Math.random() * 100) + 50
      setDistanceResult(`You are approximately ${distance} miles away!`)
    } else {
      setError("Please enter a valid postcode format.")
      return
    }
  }

  return (
    <Card className="bg-white border border-gray-100 rounded-xl shadow-soft">
      <CardContent className="p-8">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">See How Close We Are!</h4>
        <p className="text-gray-500 mb-6 text-sm">Enter your postcode to see the approximate distance from our bakery in Derry.</p>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Input
            type="text"
            placeholder="Your Postcode (e.g., BT48 7NN)"
            value={customerPostcode}
            onChange={(e) => setCustomerPostcode(e.target.value)}
            className="flex-grow border-gray-200 focus:border-pink-400 focus:ring-pink-400 rounded-lg px-4 py-2"
          />
          <Button
            onClick={calculateDistance}
            className="bg-pink-400 hover:bg-pink-500 text-white font-medium rounded-lg py-2 px-6"
          >
            Check Distance
          </Button>
        </div>
        {distanceResult && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100 text-gray-700 text-center">
            <p className="font-medium">{distanceResult}</p>
            <p className="text-xs mt-1 text-gray-400">
              {"(This is an approximate distance for demonstration purposes.)"}
            </p>
          </div>
        )}
        {error && (
          <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100 text-red-600 text-center">
            <p className="font-medium text-sm">{error}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

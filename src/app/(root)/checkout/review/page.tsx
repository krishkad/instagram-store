"use client";

import React from "react";
import { ArrowLeft, Edit, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProgressTracker from "@/components/checkout/ProgressTracker";
import { useRouter } from "next/navigation";

const ReviewPage = () => {
  //   const router.push = userouter.push();
  const router = useRouter();

  const orderItems = [
    {
      id: 1,
      name: "Silk Maxi Dress",
      image: "/placeholder.svg",
      size: "M",
      color: "Cream",
      price: 2999,
      quantity: 1,
    },
    {
      id: 2,
      name: "Golden Hoop Earrings",
      image: "/placeholder.svg",
      size: "One Size",
      color: "Gold",
      price: 1299,
      quantity: 2,
    },
  ];

  const subtotal = 5597;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-cream pt-0">
      <ProgressTracker currentStep={2} />

      <div className="container mx-auto px-4 py-8 pb-32 md:pb-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/checkout/address")}
            className="text-charcoal hover:bg-[var(--charcoal)]/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-serif text-charcoal">
              Review & Confirm
            </h1>
            <p className="text-truffle">Check your order details</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Order Items */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-charcoal">
                    Order Items
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push("/cart")}
                    className="text-gold hover:text-gold/80"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit Cart
                  </Button>
                </div>

                <div className="space-y-4">
                  {orderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 py-4 border-b border-gray-100 last:border-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-charcoal">
                          {item.name}
                        </h3>
                        <div className="text-sm text-truffle mb-1">
                          {item.size} • {item.color}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-truffle">
                            Qty: {item.quantity}
                          </span>
                          <span className="font-medium text-charcoal">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-charcoal">
                    Shipping Address
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push("/checkout/address")}
                    className="text-gold hover:text-gold/80"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>

                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-truffle mt-1" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-1 bg-blush text-xs rounded text-charcoal">
                        Home
                      </span>
                      <span className="font-medium text-charcoal">
                        Priya Sharma
                      </span>
                    </div>
                    <p className="text-truffle text-sm mb-1">
                      123 Garden Street, Bandra West, Mumbai - 400050
                    </p>
                    <p className="text-truffle text-sm">+91 98765 43210</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-lg font-medium text-charcoal mb-4">
                  Delivery Information
                </h2>
                <div className="flex gap-3">
                  <Truck className="h-5 w-5 text-truffle mt-1" />
                  <div>
                    <p className="font-medium text-charcoal mb-1">
                      Express Delivery
                    </p>
                    <p className="text-truffle text-sm">
                      Expected delivery:{" "}
                      <span className="font-medium">Tomorrow, 25 June</span>
                    </p>
                    <p className="text-truffle text-sm">
                      Delivered between 10 AM - 8 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm sticky top-32">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-truffle">Subtotal (3 items)</span>
                    <span className="text-charcoal">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-truffle">Shipping</span>
                    <span className="text-charcoal">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-truffle">Taxes</span>
                    <span className="text-charcoal">Included</span>
                  </div>
                </div>

                <div className="border-t pt-3 mb-6">
                  <div className="flex justify-between font-medium text-lg">
                    <span className="text-charcoal">Total</span>
                    <span className="text-charcoal">₹{total}</span>
                  </div>
                  <p className="text-xs text-truffle mt-1">
                    Inclusive of all taxes
                  </p>
                </div>

                <Button
                  className="w-full bg-charcoal text-cream hover:bg-[var(--charcoal)]/90 h-12"
                  onClick={() => router.push("/checkout/payment")}
                >
                  Continue to Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div>
            <div className="text-sm text-truffle">Total</div>
            <div className="font-semibold text-charcoal">₹{total}</div>
          </div>
          <Button
            className="flex-1 bg-charcoal text-cream hover:bg-charcoal/90"
            onClick={() => router.push("/checkout/payment")}
          >
            Continue to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;

import React from "react";
import { CheckCircle, Package, MapPin, Calendar, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProgressTracker from "@/components/checkout/ProgressTracker";
import Link from "next/link";

const ConfirmationPage = () => {
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

  const orderId = "ORD" + Date.now().toString().slice(-6);
  const total = 5597;

  return (
    <div className="min-h-screen bg-cream pt-0">
      <ProgressTracker currentStep={5} />

      <div className="container mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-serif text-charcoal mb-2">
            Thank You for Your Order!
          </h1>
          <p className="text-truffle text-lg">
            Your order has been placed successfully.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Package className="h-5 w-5 text-gold" />
                    <h2 className="text-lg font-medium text-charcoal">
                      Order Summary
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-truffle">Order ID:</span>
                      <span className="font-medium text-charcoal">
                        {orderId}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-truffle">Order Date:</span>
                      <span className="font-medium text-charcoal">
                        24 June 2025
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-truffle">Total Amount:</span>
                      <span className="font-medium text-charcoal">
                        ₹{total}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-truffle">Payment Method:</span>
                      <span className="font-medium text-charcoal">
                        Credit Card
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Information */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="h-5 w-5 text-gold" />
                    <h2 className="text-lg font-medium text-charcoal">
                      Delivery Information
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-truffle mt-1" />
                      <div>
                        <p className="font-medium text-charcoal mb-1">
                          Shipping Address
                        </p>
                        <p className="text-truffle text-sm">
                          Priya Sharma
                          <br />
                          123 Garden Street, Bandra West
                          <br />
                          Mumbai - 400050
                          <br />
                          +91 98765 43210
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Calendar className="h-5 w-5 text-truffle mt-1" />
                      <div>
                        <p className="font-medium text-charcoal mb-1">
                          Expected Delivery
                        </p>
                        <p className="text-truffle text-sm">
                          Tomorrow, 25 June 2025
                        </p>
                        <p className="text-truffle text-sm">
                          Between 10 AM - 8 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Items */}
            <div>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium text-charcoal mb-4">
                    Order Items
                  </h2>

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
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-charcoal text-cream hover:bg-charcoal/90 px-8">
              Track My Order
            </Button>
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto px-8">
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 p-6 bg-blush/30 rounded-lg">
            <h3 className="font-medium text-charcoal mb-2">What&apos;s Next?</h3>
            <p className="text-truffle text-sm mb-4">
              You will receive order updates via SMS and email. You can track
              your order status anytime.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-truffle">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Order Confirmed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span>Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span>Shipped</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span>Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

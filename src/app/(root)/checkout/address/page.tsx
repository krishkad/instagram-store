"use client";

import ProgressTracker from "@/components/checkout/ProgressTracker";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddressPage = () => {
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  const [showNewAddress, setShowNewAddress] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    pincode: "",
    state: "",
    city: "",
    address: "",
    landmark: "",
    addressType: "home",
  });
  const router = useRouter();

  const savedAddresses = [
    {
      id: 1,
      type: "Home",
      name: "Priya Sharma",
      address: "123 Garden Street, Bandra West, Mumbai - 400050",
      mobile: "+91 98765 43210",
    },
    {
      id: 2,
      type: "Work",
      name: "Priya Sharma",
      address: "456 Business Park, Andheri East, Mumbai - 400069",
      mobile: "+91 98765 43210",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (
      selectedAddress ||
      (showNewAddress &&
        formData.fullName &&
        formData.mobile &&
        formData.address)
    ) {
      router.push("/checkout/review");
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-0">
      <ProgressTracker currentStep={1} />

      <div className="container mx-auto px-4 py-8 pb-32 md:pb-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/cart")}
            className="text-charcoal hover:bg-[var(--charcoal)]/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-serif text-charcoal">
              Delivery Details
            </h1>
            <p className="text-truffle">Choose or add a delivery address</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Saved Addresses */}
            <div>
              <h2 className="text-lg font-medium text-charcoal mb-4">
                Saved Addresses
              </h2>
              <div className="space-y-4">
                {savedAddresses.map((address) => (
                  <Card
                    key={address.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedAddress === address.id
                        ? "ring-2 ring-gold border-gold"
                        : "border-gray-200 hover:border-gold/50"
                    }`}
                    onClick={() => setSelectedAddress(address.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 mt-1 ${
                            selectedAddress === address.id
                              ? "bg-gold border-gold"
                              : "border-gray-300"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-1 bg-blush text-xs rounded text-charcoal">
                              {address.type}
                            </span>
                            <span className="font-medium text-charcoal">
                              {address.name}
                            </span>
                          </div>
                          <p className="text-truffle text-sm mb-1">
                            {address.address}
                          </p>
                          <p className="text-truffle text-sm">
                            {address.mobile}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Add New Address */}
            <div>
              <Button
                variant="outline"
                onClick={() => setShowNewAddress(!showNewAddress)}
                className="w-full justify-start gap-2 h-12"
              >
                <Plus className="h-4 w-4" />
                Add New Address
              </Button>

              {showNewAddress && (
                <Card className="mt-4 border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-charcoal mb-4">
                      New Address
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="mobile">Mobile Number *</Label>
                        <Input
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="landmark">Landmark</Label>
                        <Input
                          id="landmark"
                          name="landmark"
                          value={formData.landmark}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Full Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label>Save as:</Label>
                      <div className="flex gap-2 mt-2">
                        {["home", "work", "other"].map((type) => (
                          <Button
                            key={type}
                            variant={
                              formData.addressType === type
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() =>
                              setFormData({ ...formData, addressType: type })
                            }
                            className="capitalize"
                          >
                            {type}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm sticky top-32">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  Order Summary
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-truffle">2 items</span>
                    <span className="text-charcoal">₹5597</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-truffle">Shipping</span>
                    <span className="text-charcoal">Free</span>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-medium text-lg">
                    <span className="text-charcoal">Total</span>
                    <span className="text-charcoal">₹5597</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-charcoal text-cream hover:bg-[var(--charcoal)]/90 h-12 mt-4"
                  onClick={() => router.push("/checkout/review")}
                >
                  Continue to Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <Button
          className="w-full bg-charcoal text-cream hover:bg-charcoal/90 h-12"
          onClick={handleContinue}
          disabled={!selectedAddress && (!showNewAddress || !formData.fullName)}
        >
          Save & Continue
        </Button>
      </div>
    </div>
  );
};

export default AddressPage;

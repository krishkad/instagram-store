"use client";
import React, { useState } from "react";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CartPage = () => {
  //   const navigate = useNavigate();
  const rouer = useRouter();
  const [promoCode, setPromoCode] = useState("");
  const [cartItems, setCartItems] = useState([
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
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingFee = subtotal >= 1000 ? 0 : 99;
  const total = subtotal + shippingFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-truffle mb-4" />
            <h2 className="text-2xl font-serif text-charcoal mb-4">
              Your cart is empty
            </h2>
            <p className="text-truffle mb-8">
              Discover our beautiful collection and add some items to your cart.
            </p>
            <Link href="/">
              <Button className="bg-charcoal text-cream hover:bg-charcoal/90">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-20 pb-32 md:pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => rouer.back()}
            className="text-charcoal hover:bg-[var(--charcoal)]/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-serif text-charcoal">Shopping Cart</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-charcoal mb-1">
                        {item.name}
                      </h3>
                      <div className="text-sm text-truffle mb-2">
                        {item.size} • {item.color}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-medium text-charcoal">
                            ₹{item.price * item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Promo Code */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-medium text-charcoal mb-3">Promo Code</h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" className="shrink-0">
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-truffle">Subtotal</span>
                    <span className="text-charcoal">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-truffle">Shipping</span>
                    <span className="text-charcoal">
                      {shippingFee === 0 ? "Free" : `₹${shippingFee}`}
                    </span>
                  </div>
                  {subtotal < 1000 && (
                    <p className="text-xs text-truffle">
                      Free shipping on orders above ₹1000
                    </p>
                  )}
                </div>

                <div className="border-t pt-3 mb-6">
                  <div className="flex justify-between font-medium text-lg">
                    <span className="text-charcoal">Total</span>
                    <span className="text-charcoal">₹{total}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout/address" className="block">
                    <Button className="w-full bg-charcoal text-cream hover:bg-[var(--charcoal)]/90 h-12">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Link href="/" className="block">
                    <Button variant="outline" className="w-full  h-12">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
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
          <Link href="/checkout/address" className="flex-1">
            <Button className="w-full bg-charcoal text-cream hover:bg-charcoal/90">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

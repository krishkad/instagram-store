import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Edit3,
  Eye,
  LogOut,
  Mail,
  MapPin,
  Package,
  Phone,
  Plus,
  Settings,
  Truck,
  User,
} from "lucide-react";

const ProfilePage = () => {
  // Mock user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  };

  const orders = [
    {
      id: "ORD-2024-001",
      date: "March 15, 2024",
      items: ["Silk Camisole", "Gold Statement Ring"],
      status: "Delivered",
      total: 134,
    },
    {
      id: "ORD-2024-002",
      date: "March 10, 2024",
      items: ["Cashmere Throw", "Vintage Leather Bag"],
      status: "In Transit",
      total: 390,
    },
    {
      id: "ORD-2024-003",
      date: "March 5, 2024",
      items: ["Merino Wool Sweater"],
      status: "Processing",
      total: 128,
    },
  ];

  const addresses = [
    {
      id: 1,
      label: "Home",
      name: "Sarah Johnson",
      street: "123 Elm Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      isDefault: true,
    },
    {
      id: 2,
      label: "Work",
      name: "Sarah Johnson",
      street: "456 Oak Avenue",
      city: "New York",
      state: "NY",
      zip: "10002",
      isDefault: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "text-sage bg-sage/10";
      case "In Transit":
        return "text-gold bg-[var(--gold)]/10";
      case "Processing":
        return "text-truffle bg-truffle/10";
      default:
        return "text-charcoal bg-charcoal/10";
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--blush)] to-[var(--cream)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            My Profile
          </h1>
          <p className="text-lg text-truffle max-w-2xl mx-auto">
            Manage your account, orders, and preferences
          </p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-8">
            {/* User Info Section */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gold" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Your account details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 max-md:flex max-md:items-center max-md:justify-center">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-xl bg-[var(--gold)]/20 text-gold">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                        <User className="h-4 w-4 text-truffle" />
                        <div>
                          <p className="text-sm text-truffle">Full Name</p>
                          <p className="font-medium text-charcoal">
                            {user.name}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                        <Mail className="h-4 w-4 text-truffle" />
                        <div>
                          <p className="text-sm text-truffle">Email</p>
                          <p className="font-medium text-charcoal">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border md:col-span-2">
                        <Phone className="h-4 w-4 text-truffle" />
                        <div>
                          <p className="text-sm text-truffle">Phone Number</p>
                          <p className="font-medium text-charcoal">
                            {user.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-gold text-gold hover:bg-[var(--gold)] hover:text-white"
                    >
                      <Edit3 className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* My Orders Section */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-gold" />
                  My Orders
                </CardTitle>
                <CardDescription>
                  Track your recent purchases and order history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-charcoal">
                              {order.id}
                            </h3>
                            <span
                              className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(
                                order.status
                              )}`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-truffle mb-1">
                            {order.date}
                          </p>
                          <p className="text-sm text-charcoal">
                            Items: {order.items.join(", ")}
                          </p>
                          <p className="text-lg font-semibold text-charcoal mt-2">
                            ${order.total}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Order
                          </Button>
                          {order.status !== "Delivered" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gold text-gold hover:bg-[var(--gold)] hover:text-white"
                            >
                              <Truck className="h-4 w-4 mr-2" />
                              Track Order
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Saved Addresses Section */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold" />
                  Saved Addresses
                </CardTitle>
                <CardDescription>
                  Manage your shipping and billing addresses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className="p-4 bg-white rounded-lg border relative"
                    >
                      {address.isDefault && (
                        <span className="absolute top-2 right-2 px-2 py-1 text-xs bg-[var(--gold)] text-white rounded-full font-medium">
                          Default
                        </span>
                      )}
                      <div className="mb-3">
                        <h3 className="font-semibold text-charcoal flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-truffle" />
                          {address.label}
                        </h3>
                      </div>
                      <div className="text-sm text-charcoal space-y-1">
                        <p>{address.name}</p>
                        <p>{address.street}</p>
                        <p>
                          {address.city}, {address.state} {address.zip}
                        </p>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm" className="text-xs">
                          <Edit3 className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs text-red-600 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center min-h-[200px]">
                    <Button
                      variant="outline"
                      className="border-gold text-gold hover:bg-[var(--gold)] hover:text-white"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Address
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Settings Section */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-gold" />
                  Account Settings
                </CardTitle>
                <CardDescription>
                  Manage your account preferences and security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div>
                      <h3 className="font-medium text-charcoal">
                        Email Notifications
                      </h3>
                      <p className="text-sm text-truffle">
                        Receive updates about orders and promotions
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div>
                      <h3 className="font-medium text-charcoal">
                        Change Password
                      </h3>
                      <p className="text-sm text-truffle">
                        Update your account password
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                  <div className="pt-4 border-t">
                    <Button
                      variant="outline"
                      className="text-red-600 hover:bg-red-50 border-red-200"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;

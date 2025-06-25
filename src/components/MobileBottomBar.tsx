"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileBottomBar = () => {
  const pathname = usePathname();
  // const [activeTab, setActiveTab] = useState("home");
  const tabs = [
    { id: "home", icon: "🏠", label: "Home", href: "/", isLink: true },
    {
      id: "search",
      icon: Search,
      label: "Search",
      href: "#search",
      isLink: false,
    },
    {
      id: "profile",
      icon: User,
      label: "Profile",
      href: "/profile",
      isLink: true,
    },
    {
      id: "cart",
      icon: ShoppingCart,
      label: "Cart",
      href: "/cart",
      badge: 2,
      isLink: true,
    },
  ];

  return (
    <div
      className={cn(
        "md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg",
        (pathname.includes("/product") ||
          pathname.includes("/cart") ||
          pathname.includes("/checkout")) &&
          "hidden"
      )}
    >
      <div className="grid grid-cols-4 h-16">
        {tabs.map((tab) => {
          const IconComponent = typeof tab.icon === "string" ? null : tab.icon;

          const buttonContent = (
            <div className="relative flex flex-col items-center justify-center space-y-1">
              {typeof tab.icon === "string" ? (
                <span className="text-xl">{tab.icon}</span>
              ) : (
                IconComponent && <IconComponent className="h-5 w-5" />
              )}

              {tab.badge && (
                <span className="absolute -top-1 -right-2 bg-gold text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                  {tab.badge}
                </span>
              )}

              <span className="text-[11px] font-medium">{tab.label}</span>
            </div>
          );

          const isActive = pathname === tab.href;

          if (tab.isLink) {
            return (
              <Link
                key={tab.id}
                href={tab.href}
                className={`h-full flex items-center justify-center ${
                  isActive ? "text-gold bg-[var(--gold)]/10" : "text-truffle"
                }`}
                // onClick={() => setActiveTab(tab.id)}
              >
                {buttonContent}
              </Link>
            );
          }

          return (
            <Button
              key={tab.id}
              variant="ghost"
              className={`h-full w-full rounded-none flex items-center justify-center ${
                isActive ? "text-gold bg-[var(--gold)]/10" : "text-truffle"
              }`}
              onClick={() => {
                // setActiveTab(tab.id);
                document
                  .querySelector(tab.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {buttonContent}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomBar;

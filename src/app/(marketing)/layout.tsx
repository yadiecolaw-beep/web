import React from "react";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {children}
    </div>
  );
}
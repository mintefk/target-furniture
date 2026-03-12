import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default: "Target Furniture — Quiet Luxury for Modern Spaces",
    template: "%s | Target Furniture"
  },
  description:
    "Target Furniture creates quietly luxurious sofas, beds, tables, and chairs in natural materials for considered interiors.",
  metadataBase: new URL("https://target-furniture.example"),
  openGraph: {
    title: "Target Furniture — Quiet Luxury for Modern Spaces",
    description:
      "Discover a curated collection of luxury furniture pieces crafted in oak, marble, and linen.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-background">{children}</main>
            <Footer />
            <CartDrawer />
          </div>
        </Providers>
      </body>
    </html>
  );
}


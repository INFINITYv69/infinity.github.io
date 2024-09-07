import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <LeafIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">Krishi Seva</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden">
          <MenuIcon className="w-5 h-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <main className="flex-1 bg-background">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold">Empower Your Farm with Krishi Seva</h1>
                <p className="text-muted-foreground md:text-xl">
                  Krishi Seva is a user-friendly IoT platform designed to help Indian farmers monitor and manage their
                  IoT devices with ease. Connect your Arduino boards and control your farm from the palm of your hand.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="w-full sm:w-auto">Get Started</Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Download App
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={400}
                  alt="Krishi Seva"
                  className="max-w-full rounded-lg"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Additional sections omitted for brevity */}
      </main>
      <footer className="bg-primary text-primary-foreground px-4 lg:px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; 2024 Krishi Seva. All rights reserved.</p>
        <nav className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

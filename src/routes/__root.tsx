import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";

import appCss from "../styles.css?url";

const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oliver Ganz",
  url: "https://ganz.pro",
  jobTitle: "Tech Entrepreneur & CTO",
  worksFor: {
    "@type": "Organization",
    name: "ganz.pro",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zurich",
    addressCountry: "Switzerland",
  },
  sameAs: ["https://linkedin.com/in/oliver-ganz"],
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Oliver Ganz | ganz.pro - Projects That Make The World Better" },
      {
        name: "description",
        content:
          "Oliver Ganz - Tech entrepreneur, CTO & Co-Founder. I help with projects that make the world better. Based in Zurich, Switzerland.",
      },
      { name: "author", content: "Oliver Ganz" },
      {
        name: "keywords",
        content: "Oliver Ganz, CTO, Entrepreneur, TestingTime, Zurich, Tech, Startup, Consulting",
      },
      { property: "og:title", content: "Oliver Ganz | ganz.pro" },
      {
        property: "og:description",
        content: "I help with projects that make the world better. Tech entrepreneur based in Zurich.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ganz.pro" },
      { property: "og:image", content: "https://ganz.pro/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "de_CH" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Oliver Ganz | ganz.pro" },
      {
        name: "twitter:description",
        content: "I help with projects that make the world better.",
      },
      { name: "twitter:image", content: "https://ganz.pro/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://ganz.pro" },
      { rel: "icon", href: "/favicon.jpg", type: "image/jpeg" },
    ],
    scripts: [{ type: "application/ld+json", children: personJsonLd }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  console.error(error);
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="max-w-md p-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">This page didn't load</h1>
        <p className="mb-6 text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            className="bg-primary px-4 py-2 font-medium text-primary-foreground"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a href="/" className="border border-border px-4 py-2 font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

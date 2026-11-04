import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "../context/ThemeContext";
import "../index.css";
import "../styles/main.scss";

export const viewport: Viewport = {
  themeColor: "#667eea",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dipanshukumar.vercel.app/"),
  title:
    "Dipanshu Kumar - Senior Software Engineer | React.js, Next.js, Fullstack & TypeScript Expert",
  description:
    "Dipanshu Kumar is a Senior Software Engineer with 7+ years of experience delivering enterprise web applications with React.js, Next.js, TypeScript, JavaScript, Redux, Node.js, Express.js, Java, and Spring Boot. Expert in micro-frontends, responsive UI development, and performance optimization.",
  keywords: [
    "Dipanshu Kumar",
    "Dipanshu Kumar Developer",
    "Dipanshu Kumar Portfolio",
    "Senior Software Engineer",
    "Senior Frontend Developer",
    "Senior Fullstack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Java Spring Boot Developer",
    "Micro-Frontends",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "PostgreSQL",
    "HTML5",
    "CSS3",
    "SCSS",
    "AWS S3",
    "Agile",
    "Bengaluru",
    "India",
  ],
  authors: [{ name: "Dipanshu Kumar", url: "https://dipanshukumar.vercel.app/" }],
  creator: "Dipanshu Kumar",
  publisher: "Dipanshu Kumar",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dipanshukumar.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dipanshukumar.vercel.app/",
    siteName: "Dipanshu Kumar Portfolio",
    title:
      "Dipanshu Kumar - Senior Software Engineer | React.js, Next.js, Fullstack & TypeScript Expert",
    description:
      "Dipanshu Kumar is a Senior Software Engineer with 7+ years of experience delivering enterprise web applications with React.js, Next.js, TypeScript, JavaScript, Redux, Node.js, Express.js, Java, and Spring Boot.",
    images: [
      {
        url: "/images/profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Dipanshu Kumar - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dipanshu Kumar - Senior Software Engineer | React.js, Next.js, Fullstack & TypeScript Expert",
    description:
      "Dipanshu Kumar is a Senior Software Engineer with 7+ years of experience delivering enterprise web applications with React.js, Next.js, TypeScript, JavaScript, Redux, Node.js, Express.js, Java, and Spring Boot.",
    creator: "@web_developer31",
    images: ["/images/profile-photo.jpg"],
  },
  icons: {
    icon: "/images/profile-photo.jpg",
    apple: "/images/profile-photo.jpg",
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dipanshu Kumar",
  jobTitle: "Senior Software Engineer",
  description:
    "Dipanshu Kumar is a Senior Software Engineer with 7+ years of experience delivering enterprise web applications with React.js, Next.js, TypeScript, JavaScript, Redux, Node.js, Express.js, Java, and Spring Boot.",
  url: "https://dipanshukumar.vercel.app/",
  image: "https://dipanshukumar.vercel.app/images/profile-photo.jpg",
  email: "dipanshukumar93@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/dipanshukumar",
    "https://www.linkedin.com/in/dipanshu-kumar-449b48133/",
    "https://x.com/web_developer31",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Micro-Frontends",
    "AWS S3",
    "Agile Development",
    "Web Performance",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Netaji Subhash Engineering College",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  },
  worksFor: {
    "@type": "Organization",
    name: "Flexing IT",
    jobTitle: "Senior Software Engineer",
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dipanshu Kumar Portfolio",
  url: "https://dipanshukumar.vercel.app/",
  description:
    "Dipanshu Kumar's frontend developer portfolio website showcasing React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3 projects. Senior Frontend Developer and Software Engineer portfolio.",
  author: {
    "@type": "Person",
    name: "Dipanshu Kumar",
  },
  publisher: {
    "@type": "Person",
    name: "Dipanshu Kumar",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

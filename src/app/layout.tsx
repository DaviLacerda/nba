import './globals.css'

export const metadata = {
  title: 'NBA',
  description: 'Dashboard for NBA Scores and Stats',
  keywords: 'NBA, Scores, Stats, Dashboard',
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-zinc-900 text-zinc-100'>{children}</body>
    </html>
  )
}

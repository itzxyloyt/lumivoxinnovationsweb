export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Shared UI here*/}
      <nav></nav>
 
      {children}
    </section>
  )
}

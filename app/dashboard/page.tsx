import { Suspense } from 'react'
import { Assets } from './Components'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading assets...</p>}>
        <Assets />
      </Suspense>
    </section>
  )
}

export default function Page() {
  return <h1>Hello, Dashboard Page!</h1>
}

export default async function Dashboard() {
  const session = await getSession()
  const userRole = session?.user?.role
 
  if (userRole === 'admin') {
    return <AdminDashboard /> 
  } else if (userRole === 'user') {
    return <UserDashboard />
  } else {
    return <AccessDenied />
  }
}

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

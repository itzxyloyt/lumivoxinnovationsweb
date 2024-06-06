import Link from 'next/link'
import { cookies } from 'next/headers'
 
export async function getSessionData(req) {
  const encryptedSessionData = cookies().get('session')?.value
  return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
}
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}

export default function Page() {
  return <h1>Hello, Next.js!</h1>
}

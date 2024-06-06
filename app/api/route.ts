export async function GET() {
  const session = await getSession()
 
  if (!session) {
    return new Response(null, { status: 401 })
  }
 
  if (session.user.role !== 'admin') {
    return new Response(null, { status: 403 })
  }
}

export async function POST(req: Request) {
  const mockEmail = 'test'
  const mockUsername = 'Test123'
  try {
    const {
      username,
      email,
      password
    } = await req.json()

    if (username == mockUsername && email == mockEmail) {
      return Response.json({
        message: "both"
      }, { status: 409 })
    } else if (username == mockUsername) {
      return Response.json({
        message: "username"
      }, { status: 409 })
    } else if (email == mockEmail) {
      return Response.json({
        message: "email"
      }, { status: 409 })
    }

    return Response.json({
      message: 'ok',
    }, { status: 200 })
  } catch (error) {
    console.log(error)

    return Response.json({
      message: "Internal server error"
    }, { status: 500 })
  }
}
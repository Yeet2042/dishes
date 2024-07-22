export async function POST(req: Request) {
  const mockEmail = 'test@test.com'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  try {
    const {
      email
    } = await req.json()

    if (!emailRegex.test(email)) {
      return Response.json({
        message: "Invalid Format"
      }, { status: 400 })
    }

    if (email == mockEmail) {
      return Response.json({
        message: "ok"
      }, { status: 200 })
    } else {
      return Response.json({
        message: "Invalid Email"
      }, { status: 401 })
    }
  } catch (error) {
    console.log(error)

    return Response.json({
      message: "Internal server error"
    }, { status: 500 })
  }
}
export async function POST(req: Request) {
  const mockEmail = 'test'
  const mockPassword = '123'
  try {
    const {
      email,
      password
    } = await req.json()

    if (email == mockEmail && password == mockPassword) {
      return Response.json({
        message: "ok",
      }, { status: 200 })
    } else if (email != mockEmail) {
      return Response.json({
        message: "email",
      }, { status: 401 })
    } else if (email == mockEmail && password !== mockPassword) {
      return Response.json({
        message: "password",
      }, { status: 401 })
    }
    return Response.json({
      message: "Invalid format",
    }, { status: 400 })

  } catch (error) {
    console.log(error)

    return Response.json({
      message: "Internal Server Error"
    }, { status: 500 })
  }
}
export async function POST(req: Request) {
  try {
    const {
      username,
      email,
      password
    } = await req.json()
    console.log(username, email, password)
    return Response.json({
      success: true,
      message: 'ok',
    }, { status: 200 })
  } catch (error) {
    console.log(error)

    return Response.json({
      success: false,
      message: "Internal server error"
    }, { status: 500 })
  }
}
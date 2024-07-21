export async function POST(req: Request) {
  try {
    const {
      email,
      password
    } = await req.json()
    console.log(email, password);

    return Response.json({
      message: "ok",
    }, { status: 200 })

  } catch (error) {
    console.log(error)

    return Response.json({
      message: "Internal Server Error"
    }, { status: 500 })
  }
}
export async function POST(req: Request) {
  const mockOTP = '111111'
  const mockOTP_old = '222222'
  try {
    const {
      otp
    } = await req.json()

    if (otp == mockOTP) {
      return Response.json({
        message: "ok"
      }, { status: 200 })
    } else if (otp == mockOTP_old) {
      return Response.json({
        message: "Time out"
      }, { status: 403 })
    }
    return Response.json({
      message: "Invalid OTP"
    }, { status: 401 })

  } catch (error) {
    console.log(error)

    return Response.json({
      message: "Internal server error"
    }, { status: 500 })
  }
}
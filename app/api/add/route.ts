import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { dbConnect } from '~/mongo/db-connect'
import { AnalyticsData } from '~/mongo/schema'

const ZIncomingData = z.object({
  channel: z.string().min(1),
  data: z.string().min(1),
})

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const body = await request.json()
  await dbConnect()
  const { channel, data } = ZIncomingData.parse(body)
  const analyticsData = new AnalyticsData({
    time: new Date().getTime(),
    channel,
    data,
  })
  await analyticsData.save()
  return NextResponse.json({})
}

import { Preference } from '~/mongo/schema'

export const getLastAggregation = async (): Promise<number | undefined> => {
  const record = await Preference.findOne({})
  return record?.lastAggregation
}

export const updateLastAggregation = async (lastAggregation: number): Promise<void> => {
  const record = await Preference.findOne({})
  if (!record) {
    await Preference.create({ lastAggregation })
    return
  }
  record.lastAggregation = lastAggregation
  await record.save()
}

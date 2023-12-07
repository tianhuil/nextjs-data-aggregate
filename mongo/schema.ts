import { Schema, model } from 'mongoose'

const dataSchema = new Schema(
  {
    time: {
      type: Number,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
  }
)

export const AnalyticsData = model('Data', dataSchema)

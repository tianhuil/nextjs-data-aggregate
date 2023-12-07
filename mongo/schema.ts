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

const preferenceSchema = new Schema(
  {
    lastAggregation: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

export const AnalyticsData = model('Data', dataSchema)
export const Preference = model('Preference', preferenceSchema)

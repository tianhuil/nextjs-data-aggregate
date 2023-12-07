import { z } from 'zod'

export const ZEnv = z.object({
  AGGREGATION_INTERVAL_MS: z.number().min(3600_000),
  AWS_ACCESS_KEY_ID_: z.string().min(1),
  AWS_SECRET_ACCESS_KEY_: z.string().min(1),
  MONGO_URI: z.string().startsWith('mongodb'),
  NODE_ENV: z.string().min(1),
  PARTITION_SIZE_MB: z.number().min(1),
})

export const zenv = ZEnv.parse({
  AGGREGATION_INTERVAL_MS: Number(process.env.AGGREGATION_INTERVAL_MS),
  AWS_ACCESS_KEY_ID_: process.env.AWS_ACCESS_KEY_ID_,
  AWS_SECRET_ACCESS_KEY_: process.env.AWS_SECRET_ACCESS_KEY_,
  MONGO_DB: process.env.MONGO_DB,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  PARTITION_SIZE_MB: Number(process.env.PARTITION_SIZE_MB),
})

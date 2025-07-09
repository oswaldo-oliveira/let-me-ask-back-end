import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
})

const _env = envSchema.safeParse(process.env)
if (!_env.success) {
  throw new Error(
    `❌ Erro ao definir as variáveis de ambiente! ${JSON.stringify(_env.error.flatten().fieldErrors)}`
  )
}

export const env = _env.data

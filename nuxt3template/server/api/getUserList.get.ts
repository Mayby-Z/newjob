import { defineEventHandler, createError } from 'h3'

export default defineEventHandler((event) => {
  try {
   const query =getQuery(event)
    return {
      a: query.a,
      b: query.b
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '服务器错误',
      data: error
    })
  }
})



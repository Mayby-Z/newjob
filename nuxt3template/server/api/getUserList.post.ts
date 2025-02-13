import { defineEventHandler, createError } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    return{
      body
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '服务器错误',
      data: error
    })
  }
})



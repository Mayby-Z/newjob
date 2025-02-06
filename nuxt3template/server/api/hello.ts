import { defineEventHandler, createError } from 'h3'

export default defineEventHandler(async () => {
  try {
    // 模拟从数据库获取数据的异步操作
    const contentList = await fetchContentList()

    // 返回内容列表
    return {
      contentList
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: error
    })
  }
})

// 模拟的异步函数，从数据库获取数据
async function fetchContentList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Item 1', description: 'Description for item 1' },
        { id: 2, title: 'Item 2', description: 'Description for item 2' },
        { id: 3, title: 'Item 3', description: 'Description for item 3' }
      ])
    }, 1000)
  })
}


import {defineEventHandler,readBody,createError} from "h3";


export default defineEventHandler(async (event) => {
  try {
    // 读取请求体中的数据
    const body = await readBody(event);

    // 这里可以添加逻辑来处理更新操作
    // 例如，更新用户列表中的某个用户
    // 这里我们只是简单地返回接收到的数据作为示例

    // 模拟更新操作
    const updatedUser = {
      id: body.id,
      name: body.name,
      email: body.email
    };

    // 返回更新后的数据
    return {
      message: '用户更新成功',
      updatedUser
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '服务器错误',
      data: error
    });
  }
});



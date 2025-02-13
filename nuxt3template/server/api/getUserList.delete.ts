import {defineEventHandler} from "h3";


export default defineEventHandler(async (event) => {

  const {id} = getQuery(event);

  if(!id){
    throw createError({
      statusCode: 400,
      statusMessage: '缺少用户id'
    })
  }
  const deleteUser = await prisma.user.delete({
    where: {
      id: Number(id)
    }
  })

})







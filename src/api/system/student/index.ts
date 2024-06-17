import request from '@/config/axios'

// 学生 VO
export interface StudentVO {
  id: number // 编号
  name: string // 名字
  birthday: Date // 出生日期
  description: string // 简介
}

// 学生 API
export const StudentApi = {
  // 查询学生分页
  getStudentPage: async (params: any) => {
    return await request.get({ url: `/system/student/page`, params })
  },

  // 查询学生详情
  getStudent: async (id: number) => {
    return await request.get({ url: `/system/student/get?id=` + id })
  },

  // 新增学生
  createStudent: async (data: StudentVO) => {
    return await request.post({ url: `/system/student/create`, data })
  },

  // 修改学生
  updateStudent: async (data: StudentVO) => {
    return await request.put({ url: `/system/student/update`, data })
  },

  // 删除学生
  deleteStudent: async (id: number) => {
    return await request.delete({ url: `/system/student/delete?id=` + id })
  },

  // 导出学生 Excel
  exportStudent: async (params) => {
    return await request.download({ url: `/system/student/export-excel`, params })
  },

// ==================== 子表（学生课程） ====================

  // 获得学生课程分页
  getStudentCoursePage: async (params) => {
    return await request.get({ url: `/system/student/student-course/page`, params })
  },
  // 新增学生课程
  createStudentCourse: async (data) => {
    return await request.post({ url: `/system/student/student-course/create`, data })
  },

  // 修改学生课程
  updateStudentCourse: async (data) => {
    return await request.put({ url: `/system/student/student-course/update`, data })
  },

  // 删除学生课程
  deleteStudentCourse: async (id: number) => {
    return await request.delete({ url: `/system/student/student-course/delete?id=` + id })
  },

  // 获得学生课程
  getStudentCourse: async (id: number) => {
    return await request.get({ url: `/system/student/student-course/get?id=` + id })
  },
}
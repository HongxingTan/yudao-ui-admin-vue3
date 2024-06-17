import request from '@/config/axios'

// 工程 VO
export interface ProjectVO {
  id: number // 工程ID
  projectName: string // 工程名称
}

// 工程 API
export const ProjectApi = {
  // 查询工程分页
  getProjectPage: async (params: any) => {
    return await request.get({ url: `/system/project/page`, params })
  },

  // 查询工程详情
  getProject: async (id: number) => {
    return await request.get({ url: `/system/project/get?id=` + id })
  },

  // 新增工程
  createProject: async (data: ProjectVO) => {
    return await request.post({ url: `/system/project/create`, data })
  },

  // 修改工程
  updateProject: async (data: ProjectVO) => {
    return await request.put({ url: `/system/project/update`, data })
  },

  // 删除工程
  deleteProject: async (id: number) => {
    return await request.delete({ url: `/system/project/delete?id=` + id })
  },

  // 导出工程 Excel
  exportProject: async (params) => {
    return await request.download({ url: `/system/project/export-excel`, params })
  },

// ==================== 子表（图片） ====================

  // 获得图片分页
  getPicPage: async (params) => {
    return await request.get({ url: `/system/project/pic/page`, params })
  },
  // 新增图片
  createPic: async (data) => {
    return await request.post({ url: `/system/project/pic/create`, data })
  },

  // 修改图片
  updatePic: async (data) => {
    return await request.put({ url: `/system/project/pic/update`, data })
  },

  // 删除图片
  deletePic: async (id: number) => {
    return await request.delete({ url: `/system/project/pic/delete?id=` + id })
  },

  // 获得图片
  getPic: async (id: number) => {
    return await request.get({ url: `/system/project/pic/get?id=` + id })
  },

// ==================== 子表（属性） ====================

  // 获得属性分页
  getPropPage: async (params) => {
    return await request.get({ url: `/system/project/prop/page`, params })
  },
  // 新增属性
  createProp: async (data) => {
    return await request.post({ url: `/system/project/prop/create`, data })
  },

  // 修改属性
  updateProp: async (data) => {
    return await request.put({ url: `/system/project/prop/update`, data })
  },

  // 删除属性
  deleteProp: async (id: number) => {
    return await request.delete({ url: `/system/project/prop/delete?id=` + id })
  },

  // 获得属性
  getProp: async (id: number) => {
    return await request.get({ url: `/system/project/prop/get?id=` + id })
  },
}
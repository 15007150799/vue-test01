import axios from 'axios'

export function   getBizCst(param){
  return axios.get('/api/bizCst',param).then((res)=>{
       return Promise.resolve(res)
    })
}

export function   getBizFnc(param){
    return axios.get('/api/bizFnc',param).then((res)=>{
         return Promise.resolve(res)
      })
  }
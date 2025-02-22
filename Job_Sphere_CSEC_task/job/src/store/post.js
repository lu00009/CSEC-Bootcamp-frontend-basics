import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

export const initialState = {
  Post1 : {
    title : '',
    type : '',
    salary : '',
    description : ''
  },
  Post2 : {
    company : '',
    logo : '',
    isBookmarked : false,
    location : '',
    experiancelevel : '',
    currency : ''
  }
}

export const action =(set) => ({
  setPost1 : (info) => set((state)=>({...state,Post1:info})),
  setPost2 : (info) => set((state)=>({...state,Post2:info}))
})

export const usePost = create(
  immer((set)=>({
    ...initialState,...action(set)
  }))
)

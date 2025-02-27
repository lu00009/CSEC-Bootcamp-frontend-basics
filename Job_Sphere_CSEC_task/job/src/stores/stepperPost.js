import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useStepperPost = create (
  immer((set) =>({
    count : 0,
    next : () =>
      set((state)=>(state.count < 3 ? { count: state.count + 1 } : state)),
      back : () => 
        set((state)=>{
          if(state.count <= 0) return
          state.count -= 1        })
  }))
)
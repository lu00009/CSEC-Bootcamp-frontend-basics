import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useStepper = create (
  immer((set) =>({
    count : 0,
    next : () =>
      set((state)=>{
        if(state.count >= 4) return
        state.count += 1
      }),
      back : () => 
        set((state)=>{
          if(state.count <= 0) return
          state.count -= 1        })
  }))
)
import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface AppState {
  top: number
  setTop: (h: number) => void
  pages: number
  setPages: (p: number) => void
}
const useStore = create<AppState>()(
  devtools((set) => ({
    top: 0,
    setTop: (h) =>
      set(() => ({
        top: h,
      })),
    pages: 0,
    setPages: (p) => set(() => ({ pages: p })),
  }))
)

export default useStore

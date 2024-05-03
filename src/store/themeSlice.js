// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

// 創建一個名為 theme 的 slice (主題相關)
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    // 初始主題為 亮色主題
    isDarkTheme: false,
  },

  reducers: {
    toggleTheme: (state) => {
      // 切換主題
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

// 匯出 改變狀態的方法
export const { toggleTheme } = themeSlice.actions;

// 匯出整個 themeSlice的 reducer
export default themeSlice.reducer;

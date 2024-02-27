import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isDarkTheme: true },

  reducers: {
    increase: (state, action) => {
      state.count++; //1 arttır
    },
    decrease: (state, action) => {
      state.count--; //1 eksilt
    },
    setCount: (state, action) => {
      state.count = action.payload; //gönderdiğim payloade göre hareket et
    },
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

//counterslice ın olusturdugu reducer store da kullnmak için export et
export default counterSlice.reducer;

//counter Slice ın olusturdugu aksiyon fonksiyonları bileşenlerde kullanmak için export et
export const { decrease, increase, setCount, toggleTheme } =
  counterSlice.actions;

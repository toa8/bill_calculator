import create from "zustand";

interface inputProps {
  input: number;
  setInput: (input: number) => void;
}

interface resultProps {
  result: number;
  setResult: (result: number) => void;
}

export const useGetBill = create<inputProps>((set) => ({
  input: 0,
  setInput: (input) => set({ input }),
}));

export const useGetPeople = create<inputProps>((set) => ({
  input: 0,
  setInput: (input) => set({ input }),
}));

export const useGetTipResult = create<resultProps>((set) => ({
  result: 0,
  setResult: (result) => set({ result }),
}));

export const useGetTotalResult = create<resultProps>((set) => ({
  result: 0,
  setResult: (result) => set({ result }),
}));

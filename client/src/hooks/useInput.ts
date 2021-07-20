import { ChangeEvent, useState } from "react";

type UpdateInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
export const useInput =(init: string) => {
  const [value, setValue] = useState(init);
  const changeValue = ({ target }: UpdateInput) =>
    setValue(target.value)
  return [value, changeValue] as const
}


import { SyntheticEvent, useRef } from "react";

export function useModal(close: Function) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeModal = (event: SyntheticEvent) => {
    if (modalRef.current === event.target) {
      close();
    }
  };
  return [modalRef, closeModal] as const;
}


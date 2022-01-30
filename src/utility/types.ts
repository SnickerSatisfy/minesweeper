export enum CellValue {
  none,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  bomb,
}

export enum CellState {
  open,
  visible,
  flagged,
}

export enum Faces {
  smile = "😄",
  shock = "😮",
  lost = "😵",
  won = "😎",
}

export type Cell = { value: CellValue; state: CellState; red?: boolean };

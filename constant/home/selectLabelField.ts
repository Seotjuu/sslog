export interface ISelectLabelField {
  label: string
  value: string
}

export const selectLabelField:ISelectLabelField[] = [
  {
    label: "최신순",
    value: "latest",
  },
  {
    label: "오래된순",
    value: "old",
  },
  {
    label: "추천순",
    value: "pop",
  },
]
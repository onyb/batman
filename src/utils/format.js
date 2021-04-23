export const numberWithCommas = x =>
  x?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

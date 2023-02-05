/**
 * string 배열에서 false, 0, -0, 0n, "", null, undefined, NaN을
 * 제거하고 하나의 className으로 연결하는 함수
 * @param classes
 * @returns
 */
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

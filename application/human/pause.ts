export const pause = async (seconds: number = 4): Promise<void> => {
  const miliseconds = seconds * 1000
  return new Promise((resolve) => setTimeout(resolve, miliseconds))
}

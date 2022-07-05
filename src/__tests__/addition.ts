const addition = (num1: number, num2: number) => {
  return num1 + num2
}

describe('addition', () => {
  it('1 + 2', () => {
    expect(addition(1, 2)).toEqual(3)
  })
})

const add = (a,b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`

test('should add two numbers',() => {
    const result = add(3,4)

    expect(result).toBe(7)
});

test('should return greeding with name',() => {
    const result = generateGreeting('Janusz')
    expect(result).toBe('Hello Janusz')
})

test('should return greeding with no name',() => {
    const result = generateGreeting()
    expect(result).toBe('Hello Anonymous')
})

// Helper function to create an array of numbers, 0 -24, by half steps (0.5)
// 24 hours, by half hour

export const generateDurationByHalfHours = (): number[] => {
    return Array.from(Array.from(Array( (24 / 0.5) + 1).keys()), x => x*0.5);
}
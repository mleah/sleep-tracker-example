interface Duration {
    value: number;
    label: string;
}


// Helper function to create an array of numbers, 0 -24, by half steps (0.5)
// 24 hours, by half hour

export const generateDurationByHalfHours = (): number[] => {
    return Array.from(Array.from(Array( (24 / 0.5) + 1).keys()), x => x*0.5);
}

// Helper function to create an array of objects to populate a list of <option> elements
// 24 hours, by half hour

export const generateDurationByHalfHourWithLabels = (): Duration[] => {
    return generateDurationByHalfHours().map((current: number, _i) => {
        return {value: current, label: `${current} hours`}
    })
};
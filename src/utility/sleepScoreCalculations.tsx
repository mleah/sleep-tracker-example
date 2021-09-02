import {Duration} from "../models/Duration";

// Helper function to create an array of numbers, 0 -24, by half steps (0.5)
// 24 hours, by half hour

export const generateDurationByHalfHours = (): number[] => {
    return Array.from(Array.from(Array( (24 / 0.5) + 1).keys()), x => x*0.5);
}

// Helper function to create an array of objects to populate a list of <option> elements
// 24 hours, by half hour

//TODO: handle case of "1 hours" - should be "1 hour"
export const generateDurationByHalfHourWithLabels = (): Duration[] => {
    return generateDurationByHalfHours().map((current: number, _i) => {
        return {value: current, label: `${current} hours`}
    })
};

//TODO: handle edge cases for infinity ( duration in bed = 0 and duration asleep > 0) and NaN (both 0)
// Additional - clarify is user should be able to select duration asleep greater than duration in bed
export const calculateSleepScore = (durationAsleep: string, durationInBed: string): number => {
    return Number((100 * (Number(durationAsleep) / Number(durationInBed))).toFixed(2));
}
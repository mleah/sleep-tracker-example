import {
    calculateSleepScore,
    generateDurationByHalfHours,
    generateDurationByHalfHourWithLabels
} from "./sleepScoreCalculations";

describe('Utility helper functions', () => {
    describe('generateDurationByHalfHours', () => {

        it('should return an array of numbers 0 - 24, incremented by 0.5', () => {
            expect(generateDurationByHalfHours()).toEqual([
                0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5,
                4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5,
                8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
                12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5,
                16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5,
                20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5,
                24]);
        });
    });

    describe('generateDurationByHalfHourWithLabels', () => {

        it('should return an array of objects with values and labels, incremented by 0.5', () => {
            const testArray = generateDurationByHalfHourWithLabels();
            expect(testArray[0]).toEqual({value: 0, label: "0 hours"});
            expect(testArray[21]).toEqual({value: 10.5, label: "10.5 hours"});
            expect(testArray[48]).toEqual({value: 24, label: "24 hours"});
        });
    });

    describe('calculateSleepScore', () => {

        it('should return a score of 100 * hours_asleep / hours_in_bed, rounded to 2 decimals', () => {
            const largeDenominator = calculateSleepScore("6.5", "8");
            const largeNumerator = calculateSleepScore("8", "6.5");
            const equivalentNumAndDenom = calculateSleepScore("8", "8");

            expect(largeDenominator).toEqual(81.25);
            expect(largeNumerator).toEqual(123.08);
            expect(equivalentNumAndDenom).toEqual(100);
        });

        // Clarify requirements for below tests

        xit('should display error when both numbers are 0', () => {
            // const test = calculateSleepScore("0", "0");
        });

        xit('should display error when durationInBed is 0, regardless of durationAsleep value', () => {
            // const numAndDenomZero = calculateSleepScore("0", "0");
        });
    });
});
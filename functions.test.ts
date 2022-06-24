const {shuffleArray} = require('./utils')

describe('shuffleArray method functions as expected', () => {
    let numArr = [0,1,2,3,4];
    let shuffled = shuffleArray(numArr);
    test('returns the same number of items', () => {
        expect(shuffled.length).toBe(numArr.length)
    })
    test('contains the same items', () => {
        for (let i = 0; i < numArr.length; i++){
        expect(shuffled).toContain(numArr[i])
}})
})
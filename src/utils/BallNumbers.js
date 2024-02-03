export const ballNumbersAsync = [

    [
        //1ball
    ],
    [
        {
            left: true,
            intervalTime: 10,
            delay: 0,
            distance: 100,
        },
        {
            left: false,
            intervalTime: 10,
            delay: 375,
            distance: 100,
        },
    ],
    [
        {
            left: true,
            intervalTime: 20,
            delay: 0,
            distance: 100,
        },
        {
            left: false,
            intervalTime: 20,
            delay: 750,
            distance: 100,
        },
        {
            left: true,
            intervalTime: 20,
            delay: 1500,
            distance: 100,
        }
    ],
    [
        //4
    ],
    [
        //5
    ],
]

export const ballNumbersSync = [
    [
        //1ball
    ],
    [
        {
            left: true,
            intervalTime: 10,
            delay: 0,
            distance: 100,
        },
        {
            left: false,
            intervalTime: 10,
            delay: 375,
            distance: 100,
        },
    ],
    [
        {
            left: true,
            intervalTime: 20,
            delay: 0,
            distance: 100,
        },
        {
            left: false,
            intervalTime: 20,
            delay: 750,
            distance: 100,
        },
        {
            left: true,
            intervalTime: 20,
            delay: 1500,
            distance: 100,
        }
    ],
    [
        //4
    ],
    [
        //5
    ],
];

export async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
interface IrandomScoreGenerator {
    userID: string;
    displayName: string;
    picture: string;
    score: number;
}

function randomScoreGenerator() {
    const flickingData = [
        {
            "userID": "u-1",
            "displayName": "Jenny Wilson",
            "picture": "",
            "score": 36411
        },
        {
            "userID": "u-2",
            "displayName": "Darell Steward",
            "picture": "",
            "score": 35278
        },
        {
            "userID": "u-3",
            "displayName": "Eleanor Pena",
            "picture": "",
            "score": 34792
        },
        {
            "userID": "u-4",
            "displayName": "Devon Lane",
            "picture": "",
            "score": 34526
        },
        {
            "userID": "u-5",
            "displayName": "Katyn Murphy", "picture":
                "",
            "score": 34224
        },
        {
            "userID": "u-6",
            "displayName": "Albert Flores", "picture":
                "",
            "score": 34034
        },
        {
            "userID": "u-7",
            "displayName": "Cortny Henry", "picture":
                "",
            "score": 33864
        },
        {
            "userID": "u-8",
            "displayName": "Lasle Alexnder",
            "picture": "",
            "score": 33642
        },
        {
            "userID": "u-9",
            "displayName": "Robert Fox",
            "picture": "",
            "score": 31235
        },
        {
            "userID": "u-10",
            "displayName": "Kristin Watson",
            "picture": "",
            "score": 30294
        }
    ]
    return flickingData.map((userData, index: number) => {
        userData.score = userData.score + Math.ceil(Math.random() * 9999) * (Math.round(Math.random()) ? 1 : -1)
        return userData;
    }).sort((a, b) => {
        if (a.score > b.score) {
            return -1;
        }
        if (a.score < b.score) {
            return 1;
        }
        return 0;
    });
}

export default randomScoreGenerator;
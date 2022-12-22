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
            "score": 15700
        },
        {
            "userID": "u-2",
            "displayName": "Darell Steward",
            "picture": "",
            "score": 46200
        },
        {
            "userID": "u-3",
            "displayName": "Eleanor Pena",
            "picture": "",
            "score": 38800
        },
        {
            "userID": "u-4",
            "displayName": "Devon Lane",
            "picture": "",
            "score": 33400
        },
        {
            "userID": "u-5",
            "displayName": "Katyn Murphy", "picture":
                "",
            "score": 31600
        },
        {
            "userID": "u-6",
            "displayName": "Albert Flores", "picture":
                "",
            "score": 30800
        },
        {
            "userID": "u-7",
            "displayName": "Cortny Henry", "picture":
                "",
            "score": 22300
        },
        {
            "userID": "u-8",
            "displayName": "Lasle Alexnder",
            "picture": "",
            "score": 17800
        },
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
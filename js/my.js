console.log("included");

let tweetobj = {
    profilename: "Design Bolts",
    username: "@designbolts",
    tweet: "I have a new resource roundup out today",
    retweets: 6,
    likes: 18,
    isShown: true,
    replies: [
        {
            username: "@juliusceasar",
            reply:"This actually nice",
        },
        {
            username: "@johnricky",
            reply:"This actually nice",
        },
        {
            username: "@designbolts",
            reply:"thank you all",
        }
    ],
    retweet: function () {
        console.log("retweeting");
    },
    hitLike: function () {
        //console.log(this.likes++);
        this.likes++
    },
    showReplies: function () {
        for (reply of this.replies) {
            console.log(`${reply.username}: ${reply.reply}`);
        }
    }
}
tweetobj.showReplies();
//console.log(tweetobj);
//console.log(tweetobj.likes);
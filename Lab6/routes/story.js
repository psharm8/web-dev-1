const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    let story = {
        "storyTitle": "That time when we ran out of fillers (between event performances)",
        "story": [
            "I was pretty active in extra curricular activites during my under-graduate studies. Involed in planning and executing various cultural and sports events. By involvement I mean off-stage, mostly handling the audio console and sometimes back-stage co-ordination. I had a couple of friends with whom I would go the music room and JAM with them. We were not a band as such, just interested in playing music. We would gather in the room after college hours, I would pick up the bass and AK would choose from guitar or keys, PP would adjust his drum kit. Any one from us would start a random tune and the other two would join in. That's how we practiced.",
            "It was the college's annual cultural event. Some guest speaker would come on stage, speak for a while (which hardly anyone listened to), then there would be a dance or act performance, between the speeches and performances there would be small acts. Acts like poetry, jokes, humour etc. I was as usual at the audio console fixing levels, and playing programmed sounds during the acts or dances. It was almost the end of the show for the day when I hear AK calling for me in my earpiece. That was unusual, its usually the post name that gets called for rather than the person's name. Like, \"Console!.. Cue next event\", \"Console!, Increase level at Mic 3\". So, when I hear AK calling me by my name on the comm, I knew something was not right, I heared, \"Puneet, there is one event left after this one and looks like we dont have any more filler left. I dont see anyone who can do a filler right now\". I said, \"Ok, I will play some good music while the stage is empty\". AK replied \"I think I have a better idea\".Current performance just got over, the host came up and announced the next event is a bit delayed so there is a surprise event. Being on the console, I don't like surprises. I have no way of knowing what kind of sounds and effects they want. Alright, so the next thing I know, VJ, one of the best vocalists in my college, comes up on stage, with my bass in his hand. I see AK following him with his guitar around his shoulder. AK says, \"Console, next event please...\". For a split second I did not know what it meant, then snap thinking to myself, \"that's my cue\". Cue to run up to the stage and JAM like just any other day but in front of a couple of hundred people.",
            "The event went very well.People loved our performance. And, before I forget, that was the first time I and the band (soon to be formed) had ever played on stage."
        ]
    };
    res.json(story);
});

module.exports = router;
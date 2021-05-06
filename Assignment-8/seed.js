const mongoose = require('mongoose');
const Blogs = require('./models/blogs');

const data = [
    {
        author: 'Tejesh Bharadwaj',
        title: 'America Travel Blog',
        img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        content: "The United States of America is the world's third largest country in size and nearly the third largest in terms of population. Located in North America, the country is bordered on the west by the Pacific Ocean and to the east by the Atlantic Ocean. Along the northern border is Canada and the southern border is Mexico. There are 50 states and the District of Columbia."
    },
    {
        author: 'Pankaj Kumar',
        title: 'Tech Blog',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        content: 'Virtual Reality has proven to be effective to enhance the training experience for any kind of activity. The immersive learning environments created with virtual reality are ideal for training in secure and efficient settings, while reducing the costs of the learning process and increasing the preparation of the learners. See our infographic with insights on virtual training effectiveness.'
    },
    {
        author: 'Vijay Yadav',
        title: 'Headphones Review Blog',
        img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        content: 'Recently I had the opportunity to spend some time with Audeze’s premium gaming headset, the Mobius. As a multimedia headphone, I really enjoyed the Mobius, as it had great multi-platform compatibility, an enjoyable tuning and remarkably good technical performance for a gaming headset--even in Bluetooth wireless mode! However, as a gaming headset--which was its intended use--it personally fell a bit flat for me.'
    },
    {
        author: 'Madhur Bhardwaj',
        title: 'Anime Blog',
        img: 'https://cdn.donmai.us/original/17/34/__sasaki_kaori_and_akiyama_sou_ushinawareta_mirai_wo_motomete_drawn_by_misaki_kurehito__1734197c5aaa370fe6668391b59197f1.jpg',
        content: 'Tokyo Otaku Mode is a blog that focuses on Japanese art and anime. They feature information on Otaku conventions and other anime topics. Hear from famous anime filmmakers and artists as well as plenty of news about the art of cartoon creation in the Japanese culture. Tokyo is Japanese himself, so he relates to the content on a personal level and enjoys dwelling on the art and the technology involved in created anime. Check out this blog if you are interested in Japanese animation or if you want to find out what motivates others to watch this unique art form.'
    },
    {
        author: 'Lucifer',
        title: 'Los Angeles Blog',
        img: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        content: 'Los Angeles also is known as the Hollywood City. It is one of the beautiful cities in the US known for its weather, beaches, and movies. On my recent trip to the US, my husband and I included exploring the Los Angeles City in the itinerary. We stayed in LA for 3 days. There are a lot of things you can do in three days. Of course, you might miss out on a few but we tried to explore most of the fun and popular places during the short visit.'
    }
]

function seedDB(){
    Blogs.insertMany(data)
    .then(()=>{
        console.log('DB Seeded :)')
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports = seedDB;
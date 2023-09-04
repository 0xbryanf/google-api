const { google } = require('googleapis');
const dotenv = require('dotenv');
dotenv.config();

// Each API may support multiple versions. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.

const blogger = google.blogger({
    version: 'v3',
    auth: process.env.GOOGLE_API_KEY
})

const params = {
    blogId: '3213900'
}

async function runSample() {
    const res = await blogger.blogs.get(params);
    console.log(`The blog url is ${res.data.url}`);
}
runSample().catch(console.error);
const { YoutubeTranscript } = require('youtube-transcript');

exports.handler = async (event, context) => {
    const url = "https://www.youtube.com/watch?v=V4Z8EdiJxgk";
    const transcript = await YoutubeTranscript.fetchTranscript(url, { lang: "en" });
    return {
        statusCode: 200,
        body: JSON.stringify({
            transcript: transcript,
        })
    }
}

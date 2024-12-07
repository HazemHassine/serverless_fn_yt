const { YoutubeTranscript } = require('youtube-transcript');

exports.handler = async (event, context) => {
    const transcript = await YoutubeTranscript.fetchTranscript(url, { lang: "en" });
    return {
        statusCode: 200,
        body: JSON.stringify({
            transcript: transcript,
        })
    }
}

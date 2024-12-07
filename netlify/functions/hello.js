const { YoutubeTranscript } = require('youtube-transcript');

exports.handler = async (event, context) => {
    const url = "https://www.youtube.com/watch?v=BmUZ2wp1lM8&pp=ygUKa3Vyemdlc2FndA%3D%3D";
    const transcript = await YoutubeTranscript.fetchTranscript(url, { lang: "en" });
    return {
        statusCode: 200,
        body: JSON.stringify({
            transcript: transcript,
        })
    }
}

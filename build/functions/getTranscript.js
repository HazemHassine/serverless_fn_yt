// netlify/functions/getTranscript.js

const fetch = require('node-fetch'); // Assuming you use node-fetch to fetch the transcript

exports.handler = async (event, context) => {
  const { videoId } = event.queryStringParameters;

  if (!videoId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Video ID is required' }),
    };
  }

  try {
    // Fetching the transcript data from a hypothetical external API
    const response = await fetch(`https://example.com/api/getTranscript?videoId=${videoId}`);
    const transcript = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Allowed methods
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept', // Allowed headers
      },
      body: JSON.stringify(transcript), // Return the transcript data as JSON
    };
  } catch (error) {
    console.error('Error fetching transcript:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
      },
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
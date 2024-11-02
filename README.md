# Social Media Auto-Poster with AI

An automated social media posting system that uses Google's Gemini AI to generate engaging content and automatically posts it to multiple social media platforms at scheduled intervals.

## Features

- 🤖 AI-powered content generation using Google's Gemini-1.5-flash model
- 📱 Multi-platform posting support (Twitter/X, Facebook)
- ⏰ Configurable posting schedule
- 🔄 Automated error handling and retry mechanisms

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Social media platform developer accounts and API keys
- Google AI API key

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd social-media-auto-poster
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
GOOGLE_API_KEY=your_google_ai_api_key
Twitter/X Credentials
TWITTER_CONSUMER_API_KEY=your_twitter_api_key
TWITTER_CONSUMER_API_SECRET=your_twitter_api_secret
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_twitter_access_token_secret
Facebook Credentials
FACEBOOK_ACCESS_TOKEN=your_facebook_access_token
FACEBOOK_PAGE_ID=your_facebook_page_id
```

## Usage

Start the server

```bash
npm start
```

The application will:

1. Start a server on the specified port (default: 3000)
2. Initialize the scheduler to post content every 5 hours
3. Generate AI content based on topics
4. Automatically post to configured social media platforms

## Configuration

### Posting Schedule

To modify the posting interval, adjust the SimpleIntervalJob configuration in `index.js`:

```javascript
const job = new SimpleIntervalJob({ hours: 5 }, task);
```

## API KEYS

To learn more about how to get your api keys

- Facebook [https://developers.facebook.com/docs/]
- Google [https://aistudio.google.com]
- X formerly(twitter) [https://developer.twitter.com/en]

### Content Topics

Add or modify topics in the `postTopics` array in `utils.js` to customize the content themes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- LinkedIn integration (in progress)
- Additional social media platforms
- Enhanced error handling and logging
- Content performance analytics
- Custom prompt templates

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Generative AI
- Twitter API v2
- Facebook Graph API
- Toad Scheduler

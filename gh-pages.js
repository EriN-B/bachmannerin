var ghpages = require('gh-pages');

ghpages.publish(
    '', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/EriN-B/personal-website', // Update to point to your repository
        user: {
            name: 'EriN-B', // update to use your name
            email: 'erin.bachmann@gmx.ch' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Luteces/Github_Sandbox.git', // Update to point to your repository
    user: {
      name: 'Lutece', // update to use your name
      email: 'ebompuis.dev@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
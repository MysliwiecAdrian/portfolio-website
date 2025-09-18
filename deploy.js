const ghpages = require('gh-pages');

ghpages.publish('build', {
  dotfiles: true,
  add: true,  // <--- This avoids the massive "git rm" command that causes ENAMETOOLONG
  message: 'Deploy portfolio site',
}, (err) => {
  if (err) {
    console.error('🚨 Deploy failed:', err);
  } else {
    console.log('✅ Deploy complete!');
  }
});
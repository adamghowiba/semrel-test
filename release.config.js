module.exports = {
  branches: [
    'master',
    { name: 'next', prerelease: true },
    { name: 'develop', prerelease: 'beta' },
    { name: "alpha", prerelease: "alpha" }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/git', {
      assets: ['CHANGELOG.md'],
    }],
    '@semantic-release/npm',
  ],
};

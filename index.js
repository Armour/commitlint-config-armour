module.exports = {
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', ['pascal-case', 'upper-case']],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'Build',
        'CI',
        'Config',
        'Docs',
        'Example',
        'Feature',
        'Fix',
        'Improve',
        'Refactor',
        'Revert',
        'Style',
        'Test'
      ]
    ]
  }
};

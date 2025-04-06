export default {
  '**/*.{js,jsx,ts,tsx}': [
    'prettier --check',
    'eslint --max-warnings=0',
    () => 'tsc --noEmit', // Run type checking on all files
  ],
  '**/*.{css,scss,md,html,json}': ['prettier --check'],
  '**/*.php': ['./vendor/bin/pint --test'],
};

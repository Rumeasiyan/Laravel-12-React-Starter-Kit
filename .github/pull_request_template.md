# 🚀 Pull Request

## Pull Request Title

⚠️ **IMPORTANT**: The PR title must match your branch name exactly!

- Current branch name: ${git rev-parse --abbrev-ref HEAD}
- Example: If branch is `feature/CCT-123/add-login`, PR title should be `feature/CCT-123/add-login`

## Jira Issue & Ticket

- [ ] The branch name follows the convention (e.g., `feature/cct-123/add-login`)
- [ ] The PR title matches the branch name exactly
- [ ] The Jira ticket is linked to this PR
  - Jira ticket link: [Paste your Jira ticket link here]

## Code Quality

### General

- [ ] I have performed a self-review of my code
- [ ] The code follows the project's coding standards and best practices
- [ ] No sensitive data is included in the commit (API keys, passwords, etc.)

### Linting & Formatting

- [ ] PHP files are formatted with Pint (`npm run lint:php`)
- [ ] JavaScript/TypeScript files are linted (`npm run lint:js`)
- [ ] All files pass the formatting check (`npm run format:check`)

### Testing

- [ ] I have added or updated tests where necessary
- [ ] All tests are passing (`php artisan test`)

## Documentation

- [ ] I have updated the README.md if needed
- [ ] I have added or updated PHPDoc comments for PHP classes/methods
- [ ] I have added or updated JSDoc comments for JavaScript/TypeScript functions
- [ ] If applicable, I have updated API documentation

## Database Changes

- [ ] No database changes required
- [ ] Database migrations have been added
  - [ ] Migrations are reversible (include `down` method)
  - [ ] Migrations are tested for both main and logs databases

## Frontend Changes

- [ ] No frontend changes required
- [ ] Components follow React best practices
- [ ] Components are properly typed with TypeScript
- [ ] UI is responsive and matches design specifications
- [ ] Accessibility guidelines are followed

## Security

- [ ] Security best practices are followed
- [ ] User input is properly validated and sanitized
- [ ] Permissions and roles are properly configured
- [ ] Activity logging is implemented where necessary

## Additional Notes

<!-- Add any additional information that would be helpful for reviewers -->

---

### Pre-merge Checklist

- [ ] The PR title follows conventional commit format
- [ ] All automated checks are passing
- [ ] Required reviewers have been assigned
- [ ] Documentation has been updated
- [ ] Changes have been tested in a development environment

---

Please ensure all checkboxes are marked before requesting a review. Thank you! 🙏

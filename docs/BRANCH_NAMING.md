# Branch Naming Convention

## Format

All branch names must follow this format:

```
<type>/<ticket-id>/<description>
```

## Components

1. **Type** (required)

   - Indicates the purpose of the branch
   - Must be lowercase
   - Must be one of the following:
     - `feature/` - New features
     - `bugfix/` - Bug fixes
     - `hotfix/` - Urgent fixes for production
     - `release/` - Release branches
     - `support/` - Maintenance tasks
     - `docs/` - Documentation updates
     - `ci/` - CI/CD changes
     - `test/` - Test additions or updates
     - `refactor/` - Code refactoring
     - `perf/` - Performance improvements
     - `style/` - Code style changes
     - `chore/` - General maintenance

2. **Ticket ID** (required)

   - Must be in uppercase
   - Must include a hyphen
   - Must match your Jira ticket ID
   - Example: `CCT-123`

3. **Description** (required)
   - Brief description of the work
   - Must be in lowercase
   - Words separated by hyphens
   - Should be concise but descriptive
   - No special characters except hyphens

## Examples

✅ Valid branch names:

```
feature/CCT-123/add-user-authentication
bugfix/CCT-456/fix-login-validation
hotfix/CCT-789/fix-security-vulnerability
docs/CCT-321/update-api-documentation
refactor/CCT-654/optimize-database-queries
test/CCT-987/add-unit-tests
```

❌ Invalid branch names:

```
feature/add-login              # Missing ticket ID
Feature/CCT-123/add-login     # Type is not lowercase
feature/cct123/add-login      # Invalid ticket ID format
feature/CCT-123/Add_Login     # Description not in correct format
```

## Git Commands

To create a new branch following this convention:

```bash
git checkout -b feature/CCT-123/add-user-authentication
```

To check your current branch:

```bash
git branch
```

## Automation

This repository includes branch name validation that will:

1. Check branch names against the defined pattern
2. Provide helpful error messages if the pattern isn't followed
3. Prevent commits to branches with invalid names

## Tips

1. Keep descriptions short but meaningful
2. Always include the ticket ID
3. Use hyphens to separate words in the description
4. Double-check the branch type matches your work
5. Ensure the ticket ID matches your Jira ticket

## Pull Request Titles

Pull request titles must match their branch names exactly. This ensures consistency and traceability between branches and pull requests.

### Examples

✅ Valid PR titles:

```
Branch name: feature/CCT-123/add-user-authentication
PR title:    feature/CCT-123/add-user-authentication

Branch name: bugfix/CCT-456/fix-login-validation
PR title:    bugfix/CCT-456/fix-login-validation
```

❌ Invalid PR titles:

```
Branch name: feature/CCT-123/add-user-authentication
PR title:    Add user authentication              # Doesn't match branch name

Branch name: bugfix/CCT-456/fix-login-validation
PR title:    CCT-456: Fix login validation       # Doesn't match branch name
```

### Automation

The repository includes automated PR title validation that will:

1. Check if the PR title matches the branch naming pattern
2. Ensure the PR title matches the branch name exactly
3. Block PR merging if the title doesn't meet the requirements

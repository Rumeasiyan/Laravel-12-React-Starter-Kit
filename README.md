# Laravel 12 + React Starter Kit

A modern starter kit created by Rumeasiyan that combines Laravel 12 and React, with pre-configured Spatie permissions, activity logging, and comprehensive code quality tools.

## 📋 Features

- **Backend**

  - Laravel 12
  - Spatie Permission Management
  - Activity Logging System with Separate Database
  - Modern Authentication System
  - PHPDoc Enforcement

- **Frontend**

  - React with TypeScript
  - Modern Component Library
  - Type-Safe Development
  - JSDoc Documentation Enforcement

- **Development Tools**
  - Automated Code Formatting (Prettier)
  - Code Quality Tools (ESLint, Pint)
  - Git Hooks (Husky)
  - Conventional Commits
  - Branch Name Validation
  - Pull Request Templates
  - TypeScript Type Checking

## 🔧 Requirements

- PHP 8.2+
- Node.js 18+
- MySQL 8.0+
- Composer 2+

## ⚡ Quick Start

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies:

```bash
composer install
npm install
```

3. Set up environment:

```bash
cp .env.example .env
php artisan key:generate
```

4. Configure databases in `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=your_username
DB_PASSWORD=your_password

DB_LOGS_CONNECTION=mysql_logs
DB_LOGS_HOST=127.0.0.1
DB_LOGS_PORT=3306
DB_LOGS_DATABASE=laravel_logs
DB_LOGS_USERNAME=your_username
DB_LOGS_PASSWORD=your_password
```

5. Create databases:

```sql
CREATE DATABASE laravel;
CREATE DATABASE laravel_logs;
```

6. Set up the application:

```bash
# Clear caches
php artisan config:clear
php artisan cache:clear

# Run fresh migrations for main database
php artisan migrate:fresh --seed --database=mysql
# Run migrations for main database
php artisan migrate --database=mysql

# Run fresh migrations for logs database
php artisan migrate:fresh --database=mysql_logs --path=database/migrations/logs
# Run migrations for logs database
php artisan migrate --database=mysql_logs --path=database/migrations/logs
```

## 🚀 Development

### Starting the Development Servers

```bash
composer run dev
```

### Code Quality Tools

#### Available Commands

```bash
# Check Everything (Recommended before committing)
npm run check:all      # Run all checks without fixing
npm run fix:all       # Fix all auto-fixable issues

# Individual Checks
npm run format:check   # Check formatting only
npm run lint:check    # Check linting only
npm run types         # Check TypeScript types

# Fix Issues
npm run format        # Fix formatting
npm run lint         # Fix linting issues
```

#### Automatic Checks

The following checks run automatically before commits:

- Code formatting (Prettier)
- Linting (ESLint for JS/TS, Pint for PHP)
- Type checking (TypeScript)
- Commit message format
- Branch naming convention

### Code Style Guide

#### PHP

- PSR-12 standard with Laravel conventions
- PHPDoc blocks required for:
  - Controller methods
  - Service methods
  - Complex functions
  - Public API methods

Example:

```php
/**
 * Get paginated activity logs with filters
 *
 * @param array $filters
 * @param int $page
 * @param int $limit
 * @param string $query
 * @return array
 */
public function getPaginatedLogs(array $filters, int $page = 1, int $limit = 15)
```

#### TypeScript/JavaScript

- ESLint with TypeScript and React rules
- JSDoc required for:
  - Component props interfaces
  - Utility functions
  - Hooks
  - Complex methods

Example:

```typescript
/**
 * Fetches and formats user data
 * @param {number} userId - The ID of the user to fetch
 * @returns {Promise<UserData>} Formatted user data
 * @throws {ApiError} When the API request fails
 */
async function fetchUserData(userId: number): Promise<UserData>;
```

### Git Workflow

#### Branch Naming Convention

Format: `<type>/<ticket-id>/<description>`

Examples:

```bash
feature/CCT-123/add-user-authentication
bugfix/CCT-456/fix-login-validation
docs/CCT-789/update-api-docs
```

Types:

- `feature/` - New features
- `bugfix/` - Bug fixes
- `hotfix/` - Urgent fixes
- `release/` - Release branches
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `test/` - Adding tests
- `chore/` - Maintenance

#### Commit Messages

Format: `type(scope): subject`

Examples:

```bash
feat(auth): Add OAuth2 authentication
fix(ui): Resolve button alignment in dark mode
docs(api): Update endpoint documentation
```

### Pull Requests

Each PR must:

1. Follow the PR template
2. Have a title matching the branch name
3. Pass all automated checks
4. Include updated documentation if needed
5. Have proper test coverage

## 🛠 Features Details

### Spatie Permissions

Pre-configured role-based permissions system:

- Role management
- Permission management
- User role assignment
- Permission-based access control

### Activity Logging

Separate database configuration for better performance:

- Dedicated database for system logs
- Automatic user action logging
- Improved query performance
- Easy audit trail maintenance

## 📝 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 👏 Credits

Created by [Rumeasiyan](https://github.com/rumeasiyan) - Laravel 12 React Starter Kit

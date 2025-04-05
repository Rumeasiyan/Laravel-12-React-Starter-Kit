# Laravel 12 + React Starter Kit

A modern starter kit created by Rumeasiyan that combines Laravel 12 and React, with pre-configured Spatie permissions and activity logging.

## Features

- Laravel 12
- React for frontend
- Spatie Permission Management
- Activity Logging System
- Modern Authentication System
- Database Separation for Logs

## Requirements

- PHP
- Node.js
- MySQL
- Composer

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

2. Install PHP dependencies:

```bash
composer install
```

3. Install JavaScript dependencies:

```bash
npm install
```

4. Copy the environment file:

```bash
cp .env.example .env
```

5. Configure your `.env` file with your database credentials:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=docverify
DB_USERNAME=your_username
DB_PASSWORD=your_password

DB_LOGS_CONNECTION=mysql_logs
DB_LOGS_HOST=127.0.0.1
DB_LOGS_PORT=3306
DB_LOGS_DATABASE=docverify_logs
DB_LOGS_USERNAME=your_username
DB_LOGS_PASSWORD=your_password
```

6. Generate application key:

```bash
php artisan key:generate
```

7. Create the databases:

```sql
CREATE DATABASE docverify;
CREATE DATABASE docverify_logs;
```

8. Run the migrations:

```bash
# Clear config cache
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

9. Build assets:

```bash
npm run dev
```

## Development

To start the development server:

1. Start Laravel server:

```bash
php artisan serve
```

2. Start Vite development server:

```bash
npm run dev
```

## Features Details

### Spatie Permissions

The starter kit comes with pre-configured role-based permissions system using Spatie's Laravel-permission package. This provides:

- Role management
- Permission management
- User role assignment
- Permission-based access control

### Activity Logging

Activity logging is configured with a separate database for better performance:

- All system logs are stored in a dedicated database
- Automatic logging of user actions
- Separate database connection for improved performance
- Easy to query and maintain audit logs

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Credits

Created by [Rumeasiyan](https://github.com/rumeasiyan) - Laravel 12 React Starter Kit

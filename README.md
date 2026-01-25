# Site

My website showcasing projects and work experience.

## Tech Stack

- **Backend**: Laravel 12 (PHP 8.2+)
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **Integration**: Inertia.js
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- PHP 8.2+
- Composer
- Node.js and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   composer install
   npm install
   ```
3. Copy `.env.example` to `.env` and configure as needed
4. Generate application key:
   ```bash
   php artisan key:generate
   ```

### Running the Development Server

To start the development server:

```bash
composer run dev
```

## Project Structure

- `app/` - Laravel application code
- `resources/js/` - React components and pages
- `routes/web.php` - Application routes
- `public/` - Public assets


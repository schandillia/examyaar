# ExamYaar

**ExamYaar** is a modern, freemium web application designed to provide educational resources such as revision notes, study guides, sample papers, and textbooks to students and parents. The platform supports resource discovery, filtering, and viewing in multiple formats. It also features a peer-to-peer (P2P) textbook exchange system to foster community sharing. ExamYaar offers both free and subscription-based features, including personalized dashboards and premium content tailored to user preferences.

## Table of Contents

- Features
- Tech Stack
- File Structure
- Resources JSON Structure
- Installation
- Usage
- Available Scripts
- Contributing
- License
- Acknowledgements
- Contributors
- Contact

## Features

- **Freemium Model**: Access basic features for free, with premium features like personalized dashboards and exclusive content available via subscription.
- **Educational Resources**: Browse a wide range of materials, including:
  - Exam notes, revision notes, sample papers, and study guides.
  - Filters for board (e.g., CBSE, ICSE), grade, subject, and resource type.
- **Peer-to-Peer (P2P) Textbook Exchange**: A community-driven feature allowing parents to exchange textbooks.
- **Syllabus Resources**: Freely accessible syllabuses for various educational boards and grades.
- **Personalized Dashboard**: Subscribed users enjoy a tailored dashboard with favorite resources, premium content, and personalized recommendations.
- **Premium Resource Highlight**: Premium resources are marked with a crown icon overlay for easy identification.
- **Responsive Design**: Optimized for seamless use on both mobile and desktop devices.
- **Data Storage**: Utilizes **Amazon S3** for secure and efficient storage of PDFs, images, and other files.
- **Database**: Powered by **Neon Postgres** for fast and scalable data management.
- **ORM**: Uses **Prisma** for type-safe database interactions.
- **Hosting**: Deployed on **AWS EC2** for scalability and reliability.
- **Future Plans**: Containerization with **Docker** to enhance development and deployment workflows.

## Tech Stack

### Frontend

- **Next.js 15.3.0**: React framework for server-side rendering and static site generation.
- **Tailwind CSS 4.1**: Utility-first CSS framework for rapid, responsive styling.
- **ShadCN**: Component library for consistent UI elements.
- **React Icons 5.5.0**: Icon library for UI enhancements (e.g., download, heart, grid, crown).
- **Next Themes**: Theme management for light/dark mode support.
- **Lucide React**: Lightweight icon library for modern UI.
- **Vaul**: Drawer component for mobile-friendly navigation.

### Backend

- **Amazon S3**: Object storage for resource files (PDFs, images).
- **Neon Postgres**: Managed Postgres database for user and resource data.
- **Prisma 6.6.0**: ORM for type-safe database queries.
- **NextAuth.js 5.0.0-beta.25**: Authentication for secure user management.

### Hosting

- **AWS EC2**: Scalable hosting for frontend and backend.

### Development Tools

- **ESLint**: Linting for code quality.
- **Prettier**: Code formatting for consistency.
- **TypeScript 5**: Static typing for robust development.
- **PostCSS**: CSS processing with Tailwind CSS integration.

### Future

- **Docker**: Planned containerization for streamlined development and deployment.

## File Structure

The project is organized as follows:

```
/examyaar
├── /components          # Reusable React components
│   ├── /ui             # UI components (buttons, cards, selects)
│   ├── /heading        # Heading component for page titles
│   └── /page-header    # Page header component
├── /lib                 # Utility functions and static data
│   └── /data           # Contains resources.json
├── /pages               # Next.js pages and routing
│   └── /index.tsx      # Main app page
├── /public              # Static assets (images, icons)
├── /styles              # Global Tailwind CSS styles
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── prisma               # Prisma schema and migrations
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation

```

## Resources JSON Structure

The `resources.json` file, located in `/lib/data`, contains an array of resource objects with the following fields:

```
{
  "id": "1",
  "title": "Class 10 Science Revision Notes",
  "board": "CBSE",
  "grade": "10",
  "subject": "Science",
  "type": "Revision Notes",
  "premium": false,
  "thumbnail": "/pdf-placeholder.jpg"
}

```

- **id**: Unique identifier for the resource (string).
- **title**: Resource title (e.g., "Class 10 Science Revision Notes").
- **board**: Educational board (e.g., CBSE, ICSE).
- **grade**: Relevant grade (e.g., 6, 9, 12).
- **subject**: Subject (e.g., Mathematics, History).
- **type**: Resource type (e.g., Revision Notes, Sample Question Paper).
- **premium**: Boolean indicating if the resource is premium (`true`/`false`).
- **thumbnail**: Path to the resource's thumbnail image.

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository**:

    ```
    git clone https://github.com/schandillia/examyaar.git
    cd examyaar

    ```

2.  **Install dependencies**:

    ```
    pnpm install

    ```

3.  **Set up environment variables**: Create a `.env` file in the root directory and add the required environment variables (e.g., database URL, AWS credentials, NextAuth settings). Refer to `.env.example` for guidance.

4.  **Set up the database**: Run Prisma migrations to set up the Neon Postgres database:

    ```
    npx prisma migrate dev

    ```

## Usage

Start the development server to run the app locally:

```
pnpm run dev

```

This will launch the app at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run the following scripts:

- `pnpm run dev`: Starts the development server with Next.js Turbopack.
- `pnpm run build`: Builds the app for production.
- `pnpm run start`: Starts the app in production mode.
- `pnpm run lint`: Lints the codebase using ESLint.
- `pnpm run format`: Formats the code using Prettier.
- `pnpm postinstall`: Generates Prisma client after installing dependencies.

## Contributing

We welcome contributions to **ExamYaar**! To contribute:

1.  Fork the repository.

2.  Create a feature branch:

    ```
    git checkout -b feature/your-feature-name

    ```

3.  Commit your changes:

    ```
    git commit -m "Add your feature"

    ```

4.  Push to the branch:

    ```
    git push origin feature/your-feature-name

    ```

5.  Open a pull request.

Please ensure your code adheres to the project's coding standards, passes linting, and includes relevant tests. See CONTRIBUTING.md for detailed guidelines.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- **Next.js**: For a powerful React framework.
- **Tailwind CSS**: For a flexible and efficient styling solution.
- **React Icons & Lucide React**: For providing a rich set of icons.
- **Prisma**: For seamless database interactions.
- **Neon Postgres & AWS**: For reliable database and hosting solutions.

## Contributors

- **Amit Schandillia** - Project Lead and Main Contributor

Interested in contributing? See the Contributing section!

## Contact

For questions, feedback, or support, please reach out:

- **GitHub Issues**: github.com/schandillia/examyaar/issues
- **Email**: [Your email or contact form, if applicable]
- **Project Maintainer**: Amit Schandillia

---

Happy learning with **ExamYaar**! 🚀

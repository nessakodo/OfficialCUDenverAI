# CU Denver AI Association Official - Production Branch

Welcome to the **CUDenver AI Association Official Website**. This repository contains the codebase for both the back-end (ExpressJS) and front-end (React) applications.

## Table of Contents
- [Before Contributing](#before-contributing)
  - [Branching Strategy](#branching-strategy)
  - [Pull Requests](#pull-requests)
  - [Prerequisites](#prerequisites)
- [Setup and Development](#setup-and-development)
  - [Running the Setup Script](#running-the-setup-script)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Key Files](#key-files)
  - [Front-End](#front-end)
  - [Back-End](#back-end)
- [Additional Resources](#additional-resources)
- [Important Notes](#important-notes)
- [Contact Information](#contact-information)

---

## Before Contributing

### Branching Strategy
- **Create Separate Branches**: Always create a separate branch for your changes.
- **No Direct Push to Main**: Never push your changes directly to the main branch.
- **Branch Naming**: Use descriptive names (e.g., `feature-login-page`, `bugfix-api-endpoint`).

### Pull Requests
- **Mandatory Pull Requests**: All changes must go through a pull request.
- **Review and Approval**: Pull requests must be reviewed and approved by at least one other team member.
- **Communication**: Feel free to ask questions or seek clarification.

### Prerequisites
- **Node.js / npm**: Node.js version 22 or higher.
  Use `nvm` for managing Node.js versions.
- **Git**: For version control.

---

## Setup and Development


### Running the Setup Script

1. **Clone the Repository**:

```bash
git clone git@github.com:cudenver-ai/OfficialCUDenverAI.git
cd OfficialCUDenverAI
```

2. **Run the Setup Script**:

You can now set up both the back-end and front-end automatically using the provided `setup.sh` script. 

```bash
./setup.sh
```

This script will:
- Set up `nvm` and install Node.js version 22.
- Install front-end and back-end dependencies.


3. **Running Express and React**:

To start Express (API) in the back-end:

```bash
cd backend
node index.ts
```

To start the React frontend:

```bash
cd frontend
npm start
```

---

## Deployment

For detailed deployment instructions, refer to `production-server.md`.

---

## Documentation

- **Server Architecture**: See `/docs/Server.md` for an overview.
- **Development Setup**: See `/docs/development-server.md` for detailed instructions.
- **Production Deployment**: See `/docs/production-server.md` for deployment steps.

---

## Key Files

### Frontend
- `src/App.tsx`: Main entry point for the React app.
- `src/config.js`: Contains global variables like `API_BASE_URL`.
- `package.json`: Frontend dependencies and scripts.
- `tsconfig.json`: Type configuration 
- `.env`: Environment variables.

### Backend
- `index.ts`: Main Flask application file.
- `tsconfig.json`: Type configuration.
- `.env`: Environment variables.
- `package.json`: backend dependencies and scripts.

---

## Additional Resources

- **Node.js and npm**:
  - [Node.js Official Site](https://nodejs.org/)
  - [npm Documentation](https://docs.npmjs.com/)
  - [nvm GitHub Repository](https://github.com/nvm-sh/nvm)
- **Frameworks and Libraries**:
  - [React Documentation](https://reactjs.org/)
  - [Typescript Documentation](https://www.typescriptlang.org/docs/)

- **Deployment Tools**:
  - [Docker](https://docs.docker.com/)

---

## Important Notes

- **Environment Variables**:
  - Keep sensitive information out of version control.
  - Add `.env*` to your `.gitignore`.

- **Switching Environments**:
  - **Development**:
    - Use `FLASK_DEBUG=1` in `.flaskenv`.
    - Run `npm start` for the frontend.
  - **Production**:
    - Set `FLASK_DEBUG=0` or remove it.
    - Build the frontend with `npm run build`.
    - Deploy using Docker.

- **Code Formatting**:
  - Configure your editor to format on save for a better development experience.

- **Team Collaboration**:
  - Document changes and use comments within configuration files to guide team members.
  - Ensure all team members run `npm install` at the root.

- **Testing**:
  - Always test both development and production setups after making changes.

---

By following this README and the accompanying documentation, you should be able to set up, develop, and deploy the application. Please let me know if you encounter any issues.
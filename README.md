# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/41631837-b536-424d-a23a-46a28380456d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/41631837-b536-424d-a23a-46a28380456d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Automatic Deployment (Recommended)
This project is configured with GitHub Actions for automatic deployment to GitHub Pages:

1. Push your code to the `main` or `master` branch
2. GitHub Actions will automatically build and deploy your project
3. Your site will be available at `https://your-username.github.io/gilded-grace/`

### Option 2: Manual Deployment
You can also deploy manually using the provided script:

```bash
# Install dependencies (if needed)
npm install --legacy-peer-deps

# Make sure the script is executable
chmod +x deploy-gh-pages.sh

# Deploy to GitHub Pages
npm run deploy
```

### Option 3: Using Lovable
Simply open [Lovable](https://lovable.dev/projects/41631837-b536-424d-a23a-46a28380456d) and click on Share -> Publish.

### GitHub Pages Setup
1. Go to your repository settings on GitHub
2. Navigate to "Pages" section
3. Under "Source", select "GitHub Actions"
4. Your site will be automatically deployed on every push to main/master

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

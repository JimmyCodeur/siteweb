# 🌐 Jimmy Fernandez's Website

## 🚀 Description

A modern website built using React and Vite to showcase customized AI solutions.

## 🛠️ Technologies Used

- React, React Router DOM, Vite
- Bootstrap, FontAwesome
- Axios, EmailJS

## 📂 Project Structure

```
src/
├── assets/           # Static assets
│   └── images/       # Images
├── components/       # Reusable components
├── data/             # Data files
├── styles/           # CSS files
│   └── features/     # Feature-specific styles
└── utils/            # Helper functions
```

## 📦 Available Scripts

- **Start the project:** `npm run dev`
- **Build for production:** `npm run build`
- **Deploy to GitHub Pages:** `npm run deploy`

## 🚀 Deploying to GitHub Pages

1. **Clone the repository:**

    ```sh
    git clone https://github.com/JimmyCodeur/siteweb.git
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Update `package.json`:**

    Edit the `homepage` key based on your deployment URL:

    - **GitHub Pages (project site):**

        ```json
        "homepage": "https://JimmyCodeur.github.io/siteweb"
        ```

    - **Custom domain (e.g., lokman.fr):**

        ```json
        "homepage": "https://lokman.fr"
        ```

4. **Build and deploy:**

    ```sh
    npm run deploy
    ```

5. **Access the deployed site:**

    - **GitHub Pages:** [https://JimmyCodeur.github.io/siteweb](https://JimmyCodeur.github.io/siteweb)
    - **Custom domain:** [https://lokman.fr](https://lokman.fr)

## 🐳 Docker Compose Setup

To deploy the website using Docker Compose with Traefik as a reverse proxy, ensure the following variables are set in your `docker-compose.yml` file:

```yaml
x-variables:
  traefik_email: "your-email@example.com"
  domain_name: "domain.com"
  web_root: "./dist"
  certs_dir: "./letsencrypt"
```

### Explanation of Docker Variables

- **traefik_email:** The email address used for registering with Let's Encrypt to obtain SSL certificates.
- **domain_name:** The domain name where your website will be accessible.
- **web_root:** The directory containing the built website files to be served.
- **certs_dir:** The directory where Let's Encrypt certificates will be stored.

Run Docker Compose:

```sh
docker-compose up -d
```

Access the deployed site:

- **Custom domain:** [https://domain.com](https://lokman.fr)

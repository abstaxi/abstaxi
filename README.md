# ABS Taxi & Cab — GitHub Pages website

A responsive, four-page static website for ABS Taxi & Cab in Barmer, Rajasthan. It includes the supplied travel and vehicle photos, direct call/WhatsApp links, and a trip enquiry form that prepares a WhatsApp message. The form does not store or submit data to a server.

## Before publishing

Review these details in the HTML files:

- Business phone numbers and WhatsApp destination (`916378376402` and `919982302380`)
- Office address: Sindhari Circle, Barmer, Rajasthan 344001
- Any wording about what is offered or vehicle availability

These contact details and address were transcribed from the supplied flyer. The site intentionally avoids promising fares, 24-hour service, specific routes, or vehicle availability.

## Publish using GitHub's website (no command line needed)

1. Sign in to GitHub and create a new **public** repository named `abs-taxi-cab-website`.
2. Open the repository and choose **Add file → Upload files**.
3. Upload the contents of this folder, keeping the same structure. `index.html` must be at the repository root; keep the `css`, `js`, and `assets` folders beside it.
4. Commit the files to the `main` branch.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, and save.
7. Wait for the Pages build to finish. The site address will be shown in **Settings → Pages** and will look like `https://YOUR-USERNAME.github.io/abs-taxi-cab-website/`.

GitHub Pages sites in public repositories are public on the web. Do not upload passwords, private data, or anything you do not want visitors to see. You can update the site later by uploading replacement files and committing them to `main`.

## Optional custom domain

If you own `abstaxi.com`, set the custom domain under **Settings → Pages → Custom domain** and add the DNS records GitHub gives you at your domain registrar. Enable **Enforce HTTPS** once it becomes available. Do not change DNS until you confirm you control the domain and are ready to point it to GitHub Pages.

## Project structure

```text
index.html          Home
tours.html          Local tours
rides.html          Local and outstation rides
contact.html        Contact details and WhatsApp trip enquiry form
css/style.css       Responsive styling
js/site.js          Mobile menu, current year, WhatsApp form
assets/             Optimized photos supplied for the site
```

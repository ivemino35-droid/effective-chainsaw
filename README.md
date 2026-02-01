<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1xbGhTkTs18QVzEoiC0HD-Qsmb3XYnEKj

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Preview in Visual Studio Code

1. Unzip the project.
2. Open the folder in Visual Studio Code.
3. Open a terminal in VS Code.
4. Run:
   - `npm install`
   - `npm run dev`
5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

### What was added
- `/manifesto` page (public-facing manifesto)
- `/trust-graph` page (multi-domain trust graph + decay curve)
- Pilot constitution template (selectable in Create Pool)

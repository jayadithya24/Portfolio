# Backend (Express)

This folder contains a simple backend API for the portfolio project.

## Endpoints

- `GET /api/health` -> health check
- `POST /api/contact` -> accepts JSON payload:

```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Hello"
}
```

## Run locally

1. Copy `.env.example` to `.env`
2. Install dependencies:
   - `npm install`
3. Start server:
   - `npm run dev`

Server defaults to `http://localhost:5000`.

## Next step

Connect the frontend contact form to `POST /api/contact` and optionally plug in email delivery (Resend, SendGrid, Nodemailer) or database storage.

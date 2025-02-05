import { addURL } from '@lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (req.headers.host === process.env.DETA_SPACE_APP_HOSTNAME) {
      await addURL(req.body.url, req.body.name);
      res.status(200).json({
        message: 'URL added successfully!',
      });
    } else {
      res.status(401).json({
        message: "You're not authorized.",
      });
    }
  } else {
    res.status(502).json({
      message: 'This route only accepts POST reqs!',
    });
  }
}

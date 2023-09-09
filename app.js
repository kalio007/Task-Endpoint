const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000

// defining the API endpoint
app.get('/', (req, res) => {
  const track = req.query.track;
  const slack_name = req.query.slack_name;
  const github_file_url = '';
  const github_repo_url = "https://github.com/kalio007/Task-Endpoint.git";
  const utc_time = new Date(Date.now()).toISOString().split(".")[0] + "Z"
  const now = new Date();
  const options = { weekday: 'long', timeZone: 'UTC' };
  const current_day  = now.toLocaleString('en-US', options);

  const response = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: 200
  }
  if (!slack_name || !track) {
    return res.status(400).json({ error: 'Missing required query parameters.' });
  } else {
    res.json(response)
  }

})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
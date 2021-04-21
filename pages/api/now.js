function now(req, res) {
  return res.json({ date: new Date() });
}

export default now;

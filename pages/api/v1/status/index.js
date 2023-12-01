function status(req, res) {
  res.status(200).json({ status: "testando utf são é à" });
}

export default status;

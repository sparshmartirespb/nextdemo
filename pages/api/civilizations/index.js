const handler = async (req, res) => {
  const response = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
  );
  const data = await response.json();
  res.status(200).json(data);
};
export default handler;

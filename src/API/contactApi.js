export const submitContactApi = async (payload) => {
  const response = await fetch(
    "https://5ixl7otkog.execute-api.ap-southeast-2.amazonaws.com/submit",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return response.json();
};

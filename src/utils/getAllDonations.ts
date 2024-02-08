export const getAllDonations = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/posts`, {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
};

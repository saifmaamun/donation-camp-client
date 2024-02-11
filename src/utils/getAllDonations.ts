export const getAllDonations = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/posts`, {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
};

export const GetUserFromIdentityProvider = async (email: string) => {
  try {
    const response = await fetch(`https://pisky.id/api/v3/core/users/?email=${encodeURIComponent(email)}&groups_by_name=${encodeURIComponent("gaggle_user")}`, {
      headers: {
        Authorization: `Bearer ${process.env.AUTHENTIK_SERVICE_ACCOUNT_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

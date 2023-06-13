const userPersonalDetails = (user) => {
  return {
    first: user.name.first,
    last: user.name.last,
    password: user.password,
    country: user.address.country,
    city: user.address.city,
    street: user.address.street,
    houseNumber: user.address.houseNumber,
    phone: user.phone,
    email: user.email,
  };
};

export default userPersonalDetails;

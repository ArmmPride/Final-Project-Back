class UsersDto {
  static formatUserToJson(user) {
    return {
      fullname: user.fullname,
      age: user.age,
      phone: user.phone,
      gender: user.gender,
      email: user.email
    };
  }
}

export default UsersDto;

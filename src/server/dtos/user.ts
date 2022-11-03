function UserDTO(model: any) {
    this.id = model.userId;
    this.email = model.email;
    this.isActivated = model.isActivated;
}

export default UserDTO;

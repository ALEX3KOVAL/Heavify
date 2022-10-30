function UserDTO(model: any) {
    this.id = model.userId;
    this.email = model.email;
    this.isActivated = model.isActivated;

    UserDTO.prototype.getEmail = () => this.email;

    UserDTO.prototype.getIsActivated = () => this.isActivated;

    UserDTO.prototype.getId = () => this.id;
}

export default UserDTO;



const UserLogOut = () => {

    sessionStorage.removeItem("id");
    window.location.href = '/';
}

export default UserLogOut;
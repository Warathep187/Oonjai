import UnauthorizedNav from "./UnauthorizedNav";
import AuthorizedNav from "./AuthorizedNav";
import AdminNav from "./AdminNav";
import DoctorNav from "./DoctorNav";

const Nav = () => {
    const role = "admin";

    if(role === "admin") {
        return <AdminNav />
    }

    if(role === "doctor") {
        return <DoctorNav />
    }
    
    if(role === "patient") {
        return <AuthorizedNav />
    }

    return <UnauthorizedNav />;
};

export default Nav;

import UnauthorizedNav from "./UnauthorizedNav";
import AuthorizedNav from "./AuthorizedNav";
import AdminNav from "./AdminNav";
import DoctorNav from "./DoctorNav";
import AssessmentDropdown from "../Assessment/AssessmentDropdown";

const Nav = () => {
    const role = "admin";

    if (role === "admin") {
        return <AdminNav />;
    }

    if (role === "doctor") {
        return <DoctorNav />;
    }

    if (role === "patient") {
        return (
            <>
                <AuthorizedNav />
                <AssessmentDropdown />
            </>
        );
    }

    return (
        <>
            <UnauthorizedNav />
            <AssessmentDropdown />
        </>
    );
};

export default Nav;

import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import Link from "next/link";

const AssessmentDropdown = () => {
    return (
        <div>
            <DropdownButton
                as={ButtonGroup}
                id="dropdown-button-drop-up"
                drop="up"
                variant="success"
                title="ทำแบบประเมิน"
                style={{
                    position: "fixed",
                    bottom: "5px",
                    right: "5px",
                }}
            >
                <Dropdown.Item role="button">
                    <Link href="/assessment/covid-19">
                        <span>แบบประเมินการติดเชื้อCovid-19</span>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item role="button">
                    <Link href="/assessment/mental-health">
                        <span>แบบประเมินสุขภาพจิต</span>
                    </Link>
                </Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default AssessmentDropdown;

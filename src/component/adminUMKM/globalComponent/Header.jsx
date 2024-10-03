import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SmsIcon from "@mui/icons-material/Sms";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// eslint-disable-next-line react/prop-types
const Header = ({headerTitle}) => {
    return (
        <div className="bg-white p-4 w-full">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">{headerTitle}</h1>
                </div>
                <div className="flex items-center gap-5">
                    <SmsIcon className="text-[#253E8D]" fontSize="large" />
                    <NotificationsActiveIcon className="text-[#253E8D]" fontSize="large" />
                    <AccountCircleIcon className="text-[#253E8D]" fontSize="large" />
                </div>
            </div>
        </div>
    );
};

export default Header;
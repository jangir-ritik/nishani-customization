import { getLastProcessedUserId } from "@/pages/api/user";

export default function UserProfile() {
    const lastUserId = getLastProcessedUserId();

    return (
        <div>
            <h1>User Id: {lastUserId}</h1>
        </div>
    );
}
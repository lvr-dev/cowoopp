export interface Coworker {
    id: string;
    firstName: string;
    prefix?: string;
    lastName: string;
    avatar?: string;
    email: string;
    phone?: string;
    status: boolean;
    client?: string;
    since?: string;
    until?: string;
    visible: boolean;
}

enum AssignmentStatus {
    AVAILABLE,
    ASSIGNMENT,
    LOOKOUT,
    LEAVING_FIRM
}



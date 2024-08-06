export const NAV_MODULE_NAME = 'efidpadmin'
export const NAV_SUB_ROUTES = {
    HOME: 'home',
    LOGIN: 'login',
    REQUEST: 'requests',
    EVENT: 'events',
    VIEW: 'view'
}
export const NAV_EVENT_SUB_ROUTES = {
    CREATE: 'create',
    DRAFTEVENTSLIST: 'draft',
    REGISTEREDEVENTSLIST: 'registered',
    REVIEWEDEVENTSLIST: 'reviewed',
    PUBLISHEDEVENTSLIST: 'published',
    COMPLETEDEVENTSLIST: 'completed',
    EVENTS_ENTRY: 'eventsEntry',
    EVENT_DETAILS: 'eventDetail',
    HORSE: 'horse',
    RIDER: 'rider'
}
export const NAV_ROUTES = {
    LOGIN: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.LOGIN}`,
    HOME: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.HOME}`,
    HORSE_REQUEST: `/${NAV_MODULE_NAME}/:reqType/${NAV_EVENT_SUB_ROUTES.HORSE}`,
    RIDER_REQUEST: `/${NAV_MODULE_NAME}/:reqType/${NAV_EVENT_SUB_ROUTES.RIDER}`,
    REQUEST: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/:requestType`,
    VIEW: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.VIEW}/:userType`,
    CREATEEVENT: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.CREATE}`,
    DRAFTEVENTSLIST: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.DRAFTEVENTSLIST}`,
    REGISTEREDEVENTSLIST: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.REGISTEREDEVENTSLIST}`,
    REVIEWEDVENTSLIST: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.REVIEWEDEVENTSLIST}`,
    PUBLISHEDEVENTSLIST: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.PUBLISHEDEVENTSLIST}`,
    COMPLETEDEVENTSLIST: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.COMPLETEDEVENTSLIST}`,
    REQUESTEVENTS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.EVENTS_ENTRY}`,
    EVENT_DETAILS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.EVENT_DETAILS}/:eventId`,
}
export const NAV_REQUEST_SUB_ROUTES = {
    CLUBS: 'clubs',
    INSTITUTES: 'institutes',
    INDIVIDUALS: 'individuals',
    LIFETIMEINDIVIDUALS: 'lifetime-individuals',
    HORSE: 'horse',
    RIDER: 'rider'
}
export const NAV_REQUEST_ROUTES = {
    CLUBS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_REQUEST_SUB_ROUTES.CLUBS}`,
    INSTITUTES: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_REQUEST_SUB_ROUTES.INSTITUTES}`,
    INDIVIDUALS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_REQUEST_SUB_ROUTES.INDIVIDUALS}`,
    LIFETIMEINDIVIDUALS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_REQUEST_SUB_ROUTES.LIFETIMEINDIVIDUALS}`,
    HORSE: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_EVENT_SUB_ROUTES.HORSE}`,
    RIDER: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_EVENT_SUB_ROUTES.RIDER}`
}

export const NAV_VIEW_ROUTES = {
    CLUBS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.VIEW}/${NAV_REQUEST_SUB_ROUTES.CLUBS}`,
    INSTITUTES: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.VIEW}/${NAV_REQUEST_SUB_ROUTES.INSTITUTES}`,
    INDIVIDUALS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.VIEW}/${NAV_REQUEST_SUB_ROUTES.INDIVIDUALS}`,
    LIFETIMEINDIVIDUALS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.VIEW}/${NAV_REQUEST_SUB_ROUTES.LIFETIMEINDIVIDUALS}`,
    HORSE: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.VIEW}/${NAV_EVENT_SUB_ROUTES.HORSE}`,
    RIDER: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.VIEW}/${NAV_EVENT_SUB_ROUTES.RIDER}`
}

export const USER_ROLES = {
    ADMIN: 'admin',
    SEC_ADMIN: 'secgen'
}

export const EVENT_STATUS = {
    DRAFT: 'DRAFT',
    REGISTER: 'REGISTER',
    REVIEW: 'REVIEWED',
    PUBLISH: 'PUBLISHED',
    REJECT: 'REJECTED',
    COMPLETE: 'COMPLETED',
    PUBLISH_REGISTER: 'PUBLISHED_REGISTER',
    PUBLISH_REVIEW: 'PUBLISHED_REVIEWED',
    PUBLISH_REJECT: 'PUBLISHED_REJECTED',
}

export const USER_STATUS = {
    DRAFT: 'DRAFT',
    REGISTER: 'REGISTER',
    REVIEW: 'REVIEWED',
    REJECT: 'REJECTED',
    ACTIVE: 'ACTIVE',
    ACTIVE_REGISTER: 'ACTIVE_REGISTER',
    ACTIVE_REVIEW: 'ACTIVE_REVIEWED',
    ACTIVE_REJECT: 'ACTIVE_REJECTED',
}

export const MEM_TYPES = {
    HORSE: 'HORSE',
    CLUB: 'CLUB',
    INDIVIDUAL: 'INDI',
    INSTITUTE: 'INST',
    RIDER: 'RIDER',
    LIFETIME: 'LIFE',
    PAYMENT: 'PAYMENT'
}


export const DISCIPLINE_CONF = {
	"DRESSAGE": [
		"Prelim",
        "Elementary",
        "Medium",
        "Advance Medium",
        "Advance",
        "Prix St George",
        "Intermediate-I"
	],
    "SHOW JUMPING": [
        "Prelim",
        "Novice",
        "Gde-III",
        "Gde-II",
        "Gde-I",
        "Grand Prix"
    ],
    "EVENTING": [
        "Pre-Novice",
        "Novice",
        "CNC One Star",
        "CCN One Star",
        "CNC Two Star",
        "CCN Two Star",
        "CNC Three Star",
        "CCN Three Star"
    ],
    "ENDURANCE": [
        "Pre-Novice (40 to 59 KM)",
        "Novice (60 to 79 KM)",
        "Intermediate (80 to 119 KM)",
        "Advance (120 KM)"
    ],
    "TENT PEGGING": [
        "Lance (Individual)",
        "Lance (Team)",
        "Sword (Individual)",
        "Sword (Team)",
        "Paired (Lance & Sword)",
        "Indian File (Lance & Sword)",
        "Rings & Peg - Lance",
        "Lemon & Peg - Sword"
    ]
}

export const DISCIPLINE_LABELS = {
	"DRESSAGE": 'Dressage Grade',
    "SHOW JUMPING": 'Show Jumping Grade',
    "EVENTING": 'Eventing Grade',
    "ENDURANCE": 'Endurance Grade',
    "TENT PEGGING": 'Tent Pegging Grade'
}

export const STATUS_VIEW = {
    DRAFT: 'Draft',
    REGISTER: 'Registered',
    REVIEWED: 'Reviewed',
    REJECTED: 'Rejected',
    PUBLISHED: 'Approved',
    ACTIVE: 'Approved',
    ACTIVE_REGISTER: 'Registered for new changes',
    ACTIVE_REVIEWED: 'Reviewed for new changes',
    ACTIVE_REJECTED: 'Rejected new changes',
    PUBLISHED_REGISTER: 'Registered for new changes',
    PUBLISHED_REVIEWED: 'Reviewed for new changes',
    PUBLISHED_REJECTED: 'Rejected new changes'
}
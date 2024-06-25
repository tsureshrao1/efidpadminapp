export const NAV_MODULE_NAME = 'efidpadmin'
export const NAV_SUB_ROUTES = {
    HOME: 'home',
    LOGIN: 'login',
    REQUEST: 'requests',
    EVENT: 'events'
}
export const NAV_EVENT_SUB_ROUTES = {
    CREATE: 'create',
    DRAFTEVENTSLIST: 'draft',
    PUBLISHEDEVENTSLIST: 'published',
    EVENTS_ENTRY: 'eventsEntry'
}
export const NAV_ROUTES = {
    LOGIN: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.LOGIN}`,
    HOME: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.HOME}`,
    REQUEST: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/:requestType`,
    CREATEEVENT: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.CREATE}`,
    DRAFTEVENTSLIST: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.DRAFTEVENTSLIST}`,
    PUBLISHEDEVENTSLIST: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.EVENT}/${NAV_EVENT_SUB_ROUTES.PUBLISHEDEVENTSLIST}`,
    REQUESTEVENTS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_EVENT_SUB_ROUTES.EVENTS_ENTRY}`,
}
export const NAV_REQUEST_SUB_ROUTES = {
    CLUBS: 'clubs',
    INSTITUTES: 'institutes',
    INDIVIDUALS: 'individuals',
    LIFETIMEINDIVIDUALS: 'lifetime-individuals'
}
export const NAV_REQUEST_ROUTES = {
    CLUBS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_REQUEST_SUB_ROUTES.CLUBS}`,
    INSTITUTES: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_REQUEST_SUB_ROUTES.INSTITUTES}`,
    INDIVIDUALS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_REQUEST_SUB_ROUTES.INDIVIDUALS}`,
    LIFETIMEINDIVIDUALS: `/${NAV_MODULE_NAME}/${NAV_SUB_ROUTES.REQUEST}/${NAV_REQUEST_SUB_ROUTES.LIFETIMEINDIVIDUALS}`
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

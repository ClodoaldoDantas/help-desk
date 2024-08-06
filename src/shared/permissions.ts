enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum Action {
  VIEW_ALL_TICKETS = 'view:all_tickets',
  CREATE_TICKET = 'create:ticket',
  UPDATE_TICKET = 'update:ticket',
  REMOVE_TICKET = 'remove:ticket',
}

const permissions = {
  [Role.USER]: [Action.CREATE_TICKET, Action.REMOVE_TICKET],
  [Role.ADMIN]: [
    Action.VIEW_ALL_TICKETS,
    Action.CREATE_TICKET,
    Action.UPDATE_TICKET,
    Action.REMOVE_TICKET,
  ],
}

export function hasPermission(role: string, action: Action) {
  return permissions[role as Role]?.includes(action) ?? false
}

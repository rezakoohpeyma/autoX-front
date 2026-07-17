export const routes = {
    home: '/',
    dashboard: '/dashboard',
    documents: "/documents",

    // Auth Routes
    signIn: '/sign-in',
    signUp: '/sign-up',
    resetPassword: '/reset-password',

    // Cartables Routes
    cartables: "/cartables",
    cartablesCustomerExpert: "/cartables/customer-expert",
    cartablesShipping: "/cartables/shipping",
    cartablesFinance: "/cartables/finance",

    // Orders Routes
    orders: "/orders",
    ordersAll: "/orders/all",
    ordersProcessTracking: "/orders/process-tracking",

    products: "/products",
    productsUs: "/products-us",
    
    workflowBuilder: "/workflow-builder",

    // User Management Routes
    userManagement: "/user-management",
    
    userManagementUsers: "/user-management/users",
    userManagementAddUser: '/user-management/users/add',
    userManagementEditUser: '/user-management/users/edit',

    userManagementRoles: "/user-management/roles",
    userManagementAddRoles: "/user-management/roles/add",

    userManagementAddPermissions: "/user-management/permissions/add",
    userManagementPermissions: "/user-management/permissions",

    // Audit Log Routes
    auditLog: "/audit-log",
    auditLogUsers: "/audit-log/users",
    auditLogOrders: "/audit-log/orders"

}
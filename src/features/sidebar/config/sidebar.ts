import { routes } from "@/config/routes";
import { SidebarCategoryType } from "../types/sidebar-types";

export const sidebar: SidebarCategoryType[] = [
    {
        id: 0,
        name: 'Main',
        items: [
            {
                id: 0,
                name: 'Dashboard',
                link: routes.dashboard,
                icon: 'LuLayoutDashboard',
            },
            {
                id: 1,
                name: 'Documents',
                link: routes.documents,
                icon: 'LuFileText',
            },
            {
                id: 2,
                name: 'Cartables',
                link: routes.cartables,
                icon: 'LuTable',
                hasChild: [
                    {
                        id: 0,
                        name: "Customer Expert",
                        link: routes.cartablesCustomerExpert
                    },
                    {
                        id: 1,
                        name: "Shipping",
                        link: routes.cartablesShipping
                    },
                    {
                        id: 2,
                        name: "Finance",
                        link: routes.cartablesFinance
                    },
                ]
            },
            {
                id: 3,
                name: 'Orders',
                link: routes.orders,
                icon: 'LuPackage',
                hasChild: [
                    {
                        id: 0,
                        name: "All Orders",
                        link: routes.ordersAll
                    },
                    {
                        id: 1,
                        name: "Process Tracking",
                        link: routes.ordersProcessTracking
                    },
                ]
            },
            
        ]
    },
    {
        id: 1,
        name: "Shop",
        items: [
            {
                id: 0,
                name: "Products Us",
                link: routes.productsUs,
                icon: 'LuShoppingBasket'
            },
            {
                id: 1,
                name: "Products",
                link: routes.productsUs,
                icon: 'LuPackageSearch'
            },
        ]
    },
    {
        id: 2,
        name: 'Administration',
        items: [
            {
                id: 0,
                name: 'Workflow Builder',
                link: routes.workflowBuilder,
                icon: 'LuGitBranchPlus'
            },
            {
                id: 1,
                name: 'User Management',
                link: routes.userManagement,
                icon: 'LuUsers',
                hasChild: [
                    {
                        id: 0,
                        name: 'Users',
                        link: routes.userManagementUsers
                    },
                    {
                        id: 1,
                        name: 'Roles',
                        link: routes.userManagementRoles
                    },
                    {
                        id: 2,
                        name: 'Permissions',
                        link: routes.userManagementPermissions
                    },
                ]
            },
            {
                id: 2, 
                name: 'Audit Log',
                link: routes.auditLog,
                icon: "LuHistory",
                hasChild: [
                    {
                        id: 0,
                        name: 'Users',
                        link: routes.auditLogUsers
                    },
                    {
                        id: 1,
                        name: 'Orders',
                        link: routes.auditLogOrders
                    }
                ]
            }
        ]
    }

]
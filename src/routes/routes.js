import DashboardLayout from '../layouts/dashboard-layout.vue';
import Dashboard from '../pages/dashboard.vue';
import Orders from '../pages/orders.vue';
import SendGift from '../pages/send-gift.vue';
import Users from '../pages/users.vue';
import Integrations from '../pages/integrations.vue';
import Settings from '../pages/settings.vue';

const routes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: '/dashboard',
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path: "orders",
                name: "Orders",
                component: Orders
            },
            {
                path: "send-gift",
                name: "SendGift",
                component: SendGift
            },
            {
                path: "users",
                name: "Users",
                component: Users
            },
            {
                path: "integrations",
                name: "Integrations",
                component: Integrations
            },
            {
                path: "settings",
                name: "Settings",
                component: Settings
            },
        ]
    }
];

export default routes;
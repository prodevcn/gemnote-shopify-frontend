<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <sidebar-link to="/dashboard">
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/orders">
        <p>Orders</p>
      </sidebar-link>
      <sidebar-link to="/send-gift">
        <p>Send a gift</p>
      </sidebar-link>
      <sidebar-link to="/users">
        <p>Users</p>
      </sidebar-link>
      <sidebar-link to="/integrations">
        <p>Integrations</p>
      </sidebar-link>
      <sidebar-link to="/settings">
        <p>Settings</p>
      </sidebar-link>
      <sidebar-link to="/logout">
        <p>Logout</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content> </dashboard-content>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./top-nav-bar.vue";
import DashboardContent from "./content.vue";
export default {
  components: {
    TopNavbar,
    DashboardContent,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: null,
    };
  },
};
</script>

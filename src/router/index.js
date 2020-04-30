import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FirstPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FirstPage.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/firstpage",
    name: "FirstPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FirstPage.vue")
  },
  {
    path: "/person",
    name: "Person",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Person.vue")
  },
  {
    path: "/apartment",
    name: "Apartment",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Apartment.vue")
  },
  {
    path: "/score",
    name: "Score",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Score.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

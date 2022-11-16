<template>
  <header>
    <router-link to="/posts/1">
      <div class="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 193 106.199"
          class="logo-svg"
        >
          <defs>
            <clipPath clipPathUnits="userSpaceOnUse" id="a">
              <path d="M0 841.89h595.276V0H0z"></path>
            </clipPath>
          </defs>
          <g
            transform="matrix(.35278 0 0 -.35278 -3.548 178.098)"
            clip-path="url(#a)"
          >
            <path
              d="M367.504 326.142a5.109 5.109 0 00-5.11-5.117h-163.54a5.109 5.109 0 00-5.111 5.117 5.107 5.107 0 005.112 5.115h163.54a5.107 5.107 0 005.109-5.115"
              fill="var(--white-color)"
            ></path>
            <path
              d="M402.13 204.923l-41.873 89.967-65.145 74.832 41.867-89.964zM159.119 204.923l41.873 89.967 65.14 74.832-41.866-89.964z"
              fill="#231f20"
            ></path>
            <path
              d="M280.624 468.148L177.35 234.191l45.534 25.111 57.74 126.939 57.739-126.939 45.532-25.111z"
              fill="var(--white-color)"
            ></path>
            <path
              d="M289.817 443.118c0-5.082-18.38-5.082-18.38 0v54.158c0 5.076 18.38 5.076 18.38 0z"
              fill="#231f20"
            ></path>
            <path
              d="M286.413 310.454a5.793 5.793 0 00-5.789-5.801 5.794 5.794 0 00-5.792 5.8v31.384a5.788 5.788 0 005.792 5.79 5.786 5.786 0 005.789-5.79z"
              fill="var(--white-color)"
            ></path>
            <path
              d="M102.29 344.97c-1.434 4.63-3.433 8.543-5.98 11.774-2.549 3.218-5.64 5.706-9.272 7.449-3.625 1.753-7.598 2.622-11.895 2.622-4.577 0-8.667-1.096-12.296-3.29-3.628-2.19-6.7-5.175-9.207-8.938-2.513-3.762-4.417-8.176-5.715-13.241-1.296-5.056-1.943-10.453-1.943-16.198 0-7.156.76-13.207 2.281-18.133 1.524-4.934 3.586-8.903 6.182-11.896 2.595-3.01 5.594-5.17 9.006-6.515 3.401-1.348 6.99-2.014 10.75-2.014 4.032 0 7.88.848 11.562 2.543 3.674 1.708 6.872 4.296 9.603 7.802 2.735 3.489 4.933 7.93 6.59 13.305 1.653 5.379 2.486 11.734 2.486 19.084 0 5.819-.72 11.044-2.153 15.647m-74.65.07c2.46 5.83 5.926 10.933 10.41 15.333 4.48 4.378 9.897 7.834 16.263 10.34 6.363 2.51 13.435 3.757 21.23 3.757 7.172 0 13.846-.978 20.035-2.948 6.177-1.975 11.546-4.931 16.118-8.87 4.577-3.944 8.18-8.94 10.818-14.991 2.648-6.044 3.968-13.094 3.968-21.172 0-6.707-1.277-12.972-3.836-18.8-2.547-5.83-6.086-10.914-10.607-15.268-4.525-4.341-9.927-7.724-16.195-10.131-6.279-2.436-13.167-3.627-20.7-3.627-7.083 0-13.734.86-19.963 2.609-6.223 1.754-11.64 4.576-16.259 8.465-4.61 3.902-8.266 8.877-10.947 14.915-2.685 6.055-4.042 13.288-4.042 21.708 0 6.635 1.237 12.86 3.707 18.68M163.843 366.145c-4.126 0-7.485-1.208-10.08-3.628-2.599-2.415-3.905-5.248-3.905-8.472 0-3.313 1.01-6.022 3.027-8.123 2.016-2.112 4.547-4.019 7.594-5.71 3.044-1.713 6.317-3.346 9.813-4.909a51.217 51.217 0 009.81-5.78 29.957 29.957 0 007.594-8.339c2.015-3.268 3.027-7.448 3.027-12.563 0-4.48-.85-8.58-2.555-12.294-1.703-3.726-4.128-6.898-7.26-9.544-3.138-2.642-6.872-4.656-11.22-6.044-4.352-1.389-9.209-2.075-14.583-2.075-4.835 0-9.159.51-12.974 1.536-3.804 1.038-6.7 2.308-8.664 3.828a231.931 231.931 0 012.286 8.605c.623 2.595 1.154 5.422 1.611 8.465h2.547a17.82 17.82 0 012.02-5.57 17.602 17.602 0 013.765-4.64c1.52-1.353 3.356-2.396 5.506-3.16 2.15-.757 4.574-1.139 7.257-1.139 5.384 0 9.343 1.345 11.896 4.034 2.56 2.682 3.83 5.91 3.83 9.67 0 3.4-.982 6.181-2.958 8.328-1.966 2.155-4.43 4.057-7.384 5.713-2.958 1.655-6.189 3.272-9.68 4.84a48.83 48.83 0 00-9.673 5.714c-2.958 2.242-5.428 4.997-7.393 8.267-1.98 3.268-2.956 7.458-2.956 12.566 0 4.657.83 8.778 2.48 12.361 1.653 3.583 3.88 6.592 6.66 9.005 2.775 2.415 5.978 4.253 9.604 5.514 3.624 1.25 7.466 1.87 11.492 1.87 4.833 0 9.071-.57 12.701-1.74 3.63-1.168 6.74-2.785 9.336-4.84a77.285 77.285 0 01-2.08-5.982c-.576-1.926-1.32-4.366-2.222-7.322h-2.01c-2.87 7.704-8.294 11.558-16.259 11.558M424.17 280.4a751.74 751.74 0 00-13.437 20.77 1226.57 1226.57 0 01-13.436 21.023h-.273c0-9.761.046-18.135.132-25.131.09-6.987.408-12.53.947-16.661h-22.044c.354 5.549.63 11.224.799 16.997.188 5.79.276 12.387.276 19.824v18.284c0 7.433-.088 14.04-.276 19.822a552.395 552.395 0 01-.8 17.403h22.045c-.453-2.686-.743-6.714-.884-12.092a795.595 795.595 0 01-.195-17.88v-12.9a1000.44 1000.44 0 019.812 11.759c3.49 4.25 6.85 8.4 10.078 12.428 3.227 4.036 6.13 7.73 8.73 11.092 2.6 3.352 4.49 5.889 5.642 7.593h15.602c-1.531-1.523-3.855-3.986-6.99-7.39a1201.156 1201.156 0 01-10.015-11.021 913.884 913.884 0 01-10.147-11.486 682.497 682.497 0 01-7.528-8.807c2.869-4.39 6.05-9.225 9.546-14.52a1303.124 1303.124 0 0110.417-15.521c3.442-5.061 6.645-9.724 9.605-13.978 2.962-4.251 5.334-7.455 7.127-9.607zM489.734 347.469a524.992 524.992 0 01-6.59-15.928 565.713 565.713 0 01-6.04-16.062h24.591a2834.697 2834.697 0 01-5.848 16.062 639.174 639.174 0 01-6.113 15.928m10.22 25.928l9.193-24.456a1617.66 1617.66 0 019.882-25.602 1354.318 1354.318 0 019.682-23.842c3.131-7.536 5.993-13.9 8.598-19.096h-23.252a1602.462 1602.462 0 01-4.438 13.443 416.32 416.32 0 01-4.835 13.706h-31.18a284.211 284.211 0 01-4.978-13.706 317.686 317.686 0 01-4.162-13.443h-13.042c1.087 2.33 2.517 5.549 4.31 9.674a888.785 888.785 0 015.911 13.983c2.15 5.193 4.465 10.769 6.92 16.73a2503.392 2503.392 0 017.397 18.083 9379.27 9379.27 0 017.256 17.997c2.37 5.923 4.546 11.438 6.518 16.529z"
              fill="#231f20"
            ></path>
          </g>
        </svg>
      </div>
    </router-link>
    <span class="menu-toggle" @click="toggleMenu">+</span>
    <nav class="nav" v-bind:class="{ active: menuOpen }">
      <span class="close" @click="toggleMenu">X</span>
      <ul class="nav-ul">
        <li class="nav-li">
          <router-link to="/posts/1" class="nav--link"> Posts </router-link>
        </li>
        <li class="nav-li">
          <router-link to="/posts/1" class="nav--link"> Posts </router-link>
        </li>
        <li class="nav-li" id="thirdPostAnchor">
          <router-link to="/posts/1" class="nav--link"> Posts </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "TheNavbar",
  data: () => ({
    menuOpen: false,
  }),
  methods: {
    toggleMenu() {
      console.log("click");
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.nav-ul {
  flex: 1;
  list-style: none;
  display: flex;
}
.nav-li:not(:last-child) {
  margin-right: 1rem;
}
.nav--link {
  display: block;
  padding: 1rem 2rem;

  text-decoration: none;

  text-transform: uppercase;
  font-weight: 700;
  color: var(--white-color);
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-in-out;
  position: relative;
}
.nav--link:hover {
  letter-spacing: 1px;
}

.nav--link::before,
.nav--link::after {
  visibility: hidden;
  content: "";
  margin: 0 auto;
  display: block;
  border: 1px solid var(--white-color);
  transition: width 0.5s ease-in-out;
  position: absolute;
  width: 0;
}
.nav--link::before {
  right: 0;
  left: 0;
  top: 0;
}
.nav--link::after {
  right: 0;
  left: 0;
  bottom: 0;
}
.nav--link:hover:before,
.nav--link:hover:after {
  visibility: visible;
  width: 80%;
}

.logo {
  letter-spacing: 2px;
  font-weight: 900;
  font-size: 1.5rem;
  font-family: "Helvetica", Roboto;
  color: var(--white-color);
  cursor: pointer;
}
.logo-svg {
  width: 100%;
  height: 100px;
}
.menu-toggle,
.nav .close {
  display: none;
}
@media (max-width: 800px) {
  #thirdPostAnchor {
    margin-right: 15px !important;
  }
  .menu-toggle {
    color: var(--white-color);
    background: tomato;
    padding: 0.5rem;
    cursor: pointer;
    display: block;
  }
  .nav {
    position: absolute;
    z-index: 200 !important;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s cubic-bezier(0.86, 0, 0.07, 1);
    transform: translate3d(-100%, 0, 0);
  }
  .nav.active {
    transform: translateZ(0);
  }
  .nav .close {
    color: var(--white-color);
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 40px;
    height: 40px;
    font-weight: 900;

    background: tomato;

    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .nav-ul {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav--link:not(:first-child),
  .btn {
    margin-top: 2rem;
  }
}
</style>

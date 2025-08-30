<template>
    <div
        class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 dark:bg-gradient-to-br">
        <!-- Navigation -->
        <nav
            class="fixed top-0 w-full bg-white/90 dark:bg-black/40 backdrop-blur-md shadow-sm z-50 transition-all duration-300 border-b border-transparent dark:border-white/10">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-4">
                    <div
                        class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        YAL
                    </div>

                    <div class="hidden md:flex items-center space-x-6">
                        <div class="hidden md:flex space-x-8">
                            <a v-for="item in navItems" :key="item.id" @click="scrollTo(item.id)"
                                class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-200 font-medium">
                                {{ item.name }}
                            </a>
                        </div>
                        <!-- Download CV button -->
                        <a href="/cv_yousra.pdf" download
                            class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow hover:from-blue-700 hover:to-blue-900 transition">
                            Télécharger CV
                        </a>
                        <!-- Theme toggle -->
                        <button @click="toggleTheme"
                            class="p-2 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition">
                            <svg v-if="!isDark" class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414" />
                            </svg>
                            <svg v-else class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        </button>
                    </div>

                    <button @click="toggleMobileMenu" class="md:hidden p-2">
                        <svg class="w-6 h-6 text-gray-800 dark:text-gray-100" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div v-if="mobileMenuOpen"
                class="md:hidden bg-white dark:bg-slate-900/90 border-t border-gray-100 dark:border-white/10">
                <div class="px-4 py-2 space-y-2">
                    <a v-for="item in navItems" :key="item.id" @click="scrollTo(item.id); toggleMobileMenu()"
                        class="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-200">
                        {{ item.name }}
                    </a>
                    <!-- Download CV button -->
                    <a href="/cv_yousra.pdf" download
                        class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow hover:from-blue-700 hover:to-blue-900 transition">
                        Télécharger CV
                    </a>
                    <button @click="toggleTheme"
                        class="w-full text-left py-2 text-gray-700 dark:text-gray-200 border-t border-gray-100 dark:border-white/10">
                        {{ isDark ? 'Mode clair' : 'Mode sombre' }}
                    </button>
                </div>
            </div>
        </nav>

        <!-- <section id="accueil" class="pt-20 pb-16 px-4 sm:px-6 lg:px-8" >
            <div class="max-w-6xl mx-auto">
                <div class="text-center">
                    <div class="relative inline-block mb-8">
                        <div
                            class="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                            YAL
                        </div>
                        <div
                            class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-900">
                        </div>
                    </div>

                    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            YOUSRA AIT LAAROUSSI
                        </span>
                    </h1>

                    <h2 class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
                        Technicien Spécialisé En Développement Informatique
                    </h2>

                    <p class="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Passionné et rigoureux, avec des compétences en développement d'applications, gestion et
                        organisation.
                        Polyvalent, doté d'un bon esprit d'équipe et orienté résultats.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://github.com/YousraAitLaaroussi" target="_blank"
                            class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/yousra-aitlaaroussi-408872377" target="_blank"
                            class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                        <a href="/cv_yousra.pdf" download
                            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-colors duration-200 shadow-lg">
                            📄 Télécharger CV
                        </a>
                    </div>
                </div>
            </div>
        </section> -->
        <section id="accueil" class="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <!-- الخلفية بالصورة -->
            <!-- <div class="absolute inset-0 z-0">
                <img src="/storage/uploads/gammes/8fa78bee-059b-40c4-83d3-6b7c3e3cf1c1.jpg" alt=""
                    class="w-full h-full object-cover"> -->
                <!-- Overlay باش يقرا النص مزيان فـ لايت/دارك -->
                <!-- <div class="absolute inset-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-[2px]"></div>
            </div> -->

            <div class="max-w-6xl mx-auto relative z-10">
                <!-- محتوى السكشن ديالك كما هو -->
                <div class="text-center">
                    <div class="relative inline-block mb-8">
                        <div
                            class="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                            YAL
                        </div>
                        <div
                            class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-900">
                        </div>
                    </div>

                    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            YOUSRA AIT LAAROUSSI
                        </span>
                    </h1>

                    <h2 class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
                        Technicien Spécialisé En Développement Informatique
                    </h2>

                    <p class="text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Passionné et rigoureux, avec des compétences en développement d'applications, gestion et
                        organisation. Polyvalent, doté d'un bon esprit d'équipe et orienté résultats.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://github.com/YousraAitLaaroussi" target="_blank"
                            class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/yousra-aitlaaroussi-408872377" target="_blank"
                            class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                            LinkedIn
                        </a>
                        <a href="/cv_yousra.pdf" download
                            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-colors duration-200 shadow-lg">
                            📄 Télécharger CV
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="apropos" class="py-16 bg-white dark:bg-slate-900/60">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    À Propos de Moi
                </h2>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div
                            class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-transparent dark:border-white/10">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Informations
                                Personnelles</h3>
                            <div class="space-y-3 text-gray-700 dark:text-gray-300">
                                <p><span class="font-medium">Date de Naissance:</span> 16/02/2004</p>
                                <p><span class="font-medium">Situation Familiale:</span> Célibataire</p>
                                <p><span class="font-medium">Localisation:</span> Complexe Al Hana GH2 IMM 05 Tanger</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact</h3>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <div
                                    class="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span class="text-gray-700 dark:text-gray-300">aitlaarousi16@gmail.com</span>
                            </div>

                            <div class="flex items-center space-x-3">
                                <div
                                    class="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span class="text-gray-700 dark:text-gray-300">06 02 50 98 65</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="competences"
            class="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
            <div class="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
                    Compétences
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    <!-- Compétences Techniques -->
                    <div
                        class="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-lg border border-transparent dark:border-white/10">
                        <div
                            class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>

                        <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Compétences
                            Techniques</h3>

                        <link rel="stylesheet"
                            href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
                        <link rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

                        <!-- Swiper groups with circular meters -->
                        <Swiper :modules="[Pagination, Navigation]" :slides-per-view="1.05" :space-between="16"
                            :pagination="{ clickable: true }" :navigation="false"
                            class="w-full max-w-full sm:max-w-xl mx-auto" :breakpoints="{
                                640: { slidesPerView: 1, spaceBetween: 24 },
                                1024: { slidesPerView: 1, spaceBetween: 30 }
                            }">
                            <SwiperSlide v-for="group in techGroups" :key="group.title">
                                <div
                                    class="p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-xl shadow border border-transparent dark:border-white/10">
                                    <h4
                                        class="text-base sm:text-lg font-semibold text-center text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                                        {{ group.title }}
                                    </h4>

                                    <div class="space-y-3 sm:space-y-4">
                                        <div v-for="s in group.skills" :key="s.label"
                                            class="flex items-center justify-between gap-3">
                                            <span
                                                class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 truncate max-w-[60%] sm:max-w-none"
                                                :style="{ color: skillColor(s.label) }">
                                                <i v-if="s.icon" :class="[s.icon, 'text-base sm:text-lg']"></i>
                                                <i v-else :class="[s.fa, 'text-base sm:text-lg']"></i>
                                                <span class="truncate">{{ s.label }}</span>
                                            </span>

                                            <div class="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
                                                <svg class="w-full h-full transform -rotate-90">
                                                    <circle cx="20" cy="20" r="16" stroke="#e5e7eb" stroke-width="4"
                                                        fill="none" />
                                                    <circle cx="20" cy="20" r="16" :stroke="skillColor(s.label)"
                                                        stroke-width="4" fill="none" stroke-dasharray="100"
                                                        :stroke-dashoffset="100 - s.value" />
                                                </svg>
                                                <span
                                                    class="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-semibold">
                                                    {{ s.value }}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <!-- Frameworks -->
                    <div
                        class="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-lg border border-transparent dark:border-white/10">
                        <div
                            class="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Frameworks
                        </h3>

                        <div class="space-y-3 sm:space-y-4 text-sm text-gray-600 dark:text-gray-300">
                            <!-- Vue.js -->
                            <div class="flex items-center justify-between">
                                <span class="flex items-center gap-2 truncate max-w-[60%] sm:max-w-none">
                                    <i class="devicon-vuejs-plain colored text-base sm:text-lg"></i> <span
                                        class="truncate">Vue.js 3</span>
                                </span>
                                <div class="relative w-9 h-9 sm:w-10 sm:h-10">
                                    <svg class="w-full h-full transform -rotate-90">
                                        <circle cx="20" cy="20" r="16" stroke="#e5e7eb" stroke-width="4" fill="none" />
                                        <circle cx="20" cy="20" r="16" stroke="#42b883" stroke-width="4" fill="none"
                                            stroke-dasharray="100" stroke-dashoffset="10" />
                                    </svg>
                                    <span
                                        class="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-semibold">90%</span>
                                </div>
                            </div>

                            <!-- Tailwind CSS -->
                            <div class="flex items-center justify-between">
                                <span class="flex items-center gap-2 truncate max-w-[60%] sm:max-w-none">
                                    <i class="devicon-tailwindcss-plain colored text-base sm:text-lg"></i> <span
                                        class="truncate">Tailwind CSS</span>
                                </span>
                                <div class="relative w-9 h-9 sm:w-10 sm:h-10">
                                    <svg class="w-full h-full transform -rotate-90">
                                        <circle cx="20" cy="20" r="16" stroke="#e5e7eb" stroke-width="4" fill="none" />
                                        <circle cx="20" cy="20" r="16" stroke="#38bdf8" stroke-width="4" fill="none"
                                            stroke-dasharray="100" stroke-dashoffset="15" />
                                    </svg>
                                    <span
                                        class="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-semibold">85%</span>
                                </div>
                            </div>

                            <!-- Laravel -->
                            <div class="flex items-center justify-between">
                                <span class="flex items-center gap-2 truncate max-w-[60%] sm:max-w-none">
                                    <i class="devicon-laravel-plain colored text-base sm:text-lg"></i> <span
                                        class="truncate">Laravel</span>
                                </span>
                                <div class="relative w-9 h-9 sm:w-10 sm:h-10">
                                    <svg class="w-full h-full transform -rotate-90">
                                        <circle cx="20" cy="20" r="16" stroke="#e5e7eb" stroke-width="4" fill="none" />
                                        <circle cx="20" cy="20" r="16" stroke="#f9322c" stroke-width="4" fill="none"
                                            stroke-dasharray="100" stroke-dashoffset="20" />
                                    </svg>
                                    <span
                                        class="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-semibold">80%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Compétences Relationnelles -->
                    <div
                        class="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-lg border border-transparent dark:border-white/10">
                        <div
                            class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Compétences
                            Relationnelles</h3>
                        <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <p>Travail d'équipe</p>
                            <p>Résolution de problèmes</p>
                            <p>Flexibilité</p>
                            <p>Innovation</p>
                            <p>Compétences analytiques</p>
                            <p>Compétences en gestion</p>
                        </div>
                        <div class="mt-3 sm:mt-4">
                            <div class="flex justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
                                <span>Niveau</span>
                                <span>100%</span>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                                <div class="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                                    style="width: 100%"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Langues -->
                    <div
                        class="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-lg border border-transparent dark:border-white/10">
                        <div
                            class="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                        </div>
                        <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Langues
                        </h3>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
                                    <span>Français</span><span>Moyenne</span>
                                </div>
                                <div class="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                                    <div class="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                                        style="width: 50%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
                                    <span>Arabe</span><span>Natif</span>
                                </div>
                                <div class="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                                    <div class="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                                        style="width: 100%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
                                    <span>Anglais</span><span>Intermédiaire</span>
                                </div>
                                <div class="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                                    <div class="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                                        style="width: 75%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="experience" class="py-16 bg-white dark:bg-slate-900/60">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Expériences Professionnelles
                </h2>

                <div class="space-y-8">
                    <div
                        class="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border-l-4 border-blue-500">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Développeur Site Web</h3>
                            <span class="text-blue-600 font-medium">2025 (Du 21/07 Au 28/08)</span>
                        </div>
                        <p class="text-blue-700 dark:text-blue-300 font-medium mb-3">EXCELEA</p>
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Expérience en conception et développement de sites web responsives, utilisation de HTML,
                            CSS, JavaScript et frameworks modernes (Vue.js3, Tailwind CSS, Laravel). Gestion des bases
                            de données,
                            intégration d'API, optimisation des performances et tests fonctionnels pour garantir une
                            expérience utilisateur fluide.
                        </p>
                    </div>

                    <div
                        class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border-l-4 border-gray-500">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Assistance Dentaire</h3>
                            <span class="text-gray-600 dark:text-gray-300 font-medium">2023 – 2024/11</span>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 font-medium mb-3">Cabinet Dentaire Dr. Chomi Taoufik
                        </p>
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Expérience en accueil et préparation des patients, stérilisation du matériel et organisation
                            du cabinet.
                            Assistance au praticien lors des soins, gestion des dossiers, support administratif et
                            gestion des mutuelles pour les patients.
                        </p>
                    </div>

                    <div
                        class="bg-gradient-to-r from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border-l-4 border-green-500">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Agent d'Accueil</h3>
                            <span class="text-green-600 font-medium">2022 – 2023</span>
                        </div>
                        <p class="text-green-700 dark:text-green-300 font-medium mb-3">PolyClinique CNSS</p>
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Expérience dans l'accueil et l'orientation des patients, la gestion des rendez-vous et des
                            dossiers, et la saisie des résultats d'examens. Compétences en assistance aux médecins :
                            préparation des patients, mesure de la tension artérielle et du poids des femmes enceintes,
                            et réalisation d'électrocardiogrammes (ECG).
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="education"
            class="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Éducation
                </h2>

                <div class="space-y-6">
                    <div
                        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-transparent dark:border-white/10">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Technicien Spécialisé En
                                Développement Informatique</h3>
                            <span class="text-blue-600 font-medium">2023 - 2025</span>
                        </div>
                        <p class="text-blue-700 dark:text-blue-300 font-medium mb-3">Miage Tanger</p>
                        <div
                            class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-transparent dark:border-white/10">
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Projet de fin d'étude</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>GESTION CABINET DENTAIRE</strong>
                            </p>
                            <p class="text-gray-600 dark:text-gray-300 text-sm">Développé en JavaFX avec CSS pour
                                l'interface graphique. Base de données MySQL pour le stockage sécurisé des informations
                                et intégration des relations.</p>
                        </div>
                    </div>

                    <div
                        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-transparent dark:border-white/10">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">S2 Économie</h3>
                            <span class="text-blue-600 font-medium">2021 - 2022</span>
                        </div>
                        <p class="text-blue-700 dark:text-blue-300 font-medium">Université Abdelmalek Essaâdi</p>
                    </div>

                    <div
                        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-transparent dark:border-white/10">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Attestation d'Aide
                                Soignante</h3>
                            <span class="text-blue-600 font-medium">2021 - 2022</span>
                        </div>
                        <p class="text-blue-700 dark:text-blue-300 font-medium">École Estudiantes</p>
                    </div>

                    <div
                        class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-transparent dark:border-white/10">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Bac Sciences de la Vie et
                                de la Terre</h3>
                            <span class="text-blue-600 font-medium">2020 - 2021</span>
                        </div>
                        <p class="text-blue-700 dark:text-blue-300 font-medium">Lycée Al-Mourabitin</p>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h3 class="text-2xl font-bold mb-4">Restons en Contact</h3>
                    <p class="text-gray-400 mb-6">N'hésitez pas à me contacter pour discuter de vos projets</p>

                    <div class="flex justify-center space-x-6 mb-8">
                        <a href="https://github.com/YousraAitLaaroussi" target="_blank"
                            class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        <a href="https://www.linkedin.com/in/yousra-aitlaaroussi-408872377" target="_blank"
                            class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        <a href="mailto:aitlaarousi16@gmail.com"
                            class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>

                    <p class="text-gray-500 text-sm">
                        © 2025 Yousra Ait Laaroussi. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'
const mobileMenuOpen = ref(false)
const isDark = ref(false)

const navItems = [
    { id: 'accueil', name: 'Accueil' },
    { id: 'apropos', name: 'À Propos' },
    { id: 'competences', name: 'Compétences' },
    { id: 'experience', name: 'Expérience' },
    { id: 'education', name: 'Éducation' }
]

// Groups for Compétences Techniques (centered sliders)
// Groups for Compétences Techniques (centered sliders)
const techGroups = [
    {
        title: 'Back/General',
        skills: [
            { label: 'C', value: 80, icon: 'devicon-c-plain' },
            { label: 'Java', value: 65, icon: 'devicon-java-plain' },
            { label: 'PHP', value: 90, icon: 'devicon-php-plain' },
            { label: 'Python', value: 85, icon: 'devicon-python-plain' },
        ],
    },
    {
        title: 'Web — Front',
        skills: [
            { label: 'HTML', value: 95, icon: 'devicon-html5-plain' },
            { label: 'CSS', value: 85, icon: 'devicon-css3-plain' },
            { label: 'JavaScript', value: 80, icon: 'devicon-javascript-plain' },
        ],
    },
    {
        title: 'Base de données',
        skills: [
            { label: 'MySQL', value: 70, icon: 'devicon-mysql-plain' },
        ],
    },
    {
        title: 'Bureautique',
        skills: [
            { label: 'Word', value: 80, fa: 'fa-brands fa-microsoft' },
            { label: 'Excel', value: 85, fa: 'fa-solid fa-table' },
            { label: 'PowerPoint', value: 75, fa: 'fa-solid fa-chart-pie' },
            { label: 'Access', value: 70, fa: 'fa-solid fa-database' },
        ],
    },
]

// ألوان كل skill بحال القدام
const skillColor = (label) => ({
    'C': '#2563eb',
    'Java': '#16a34a',
    'PHP': '#f59e0b',
    'C#': '#7c3aed',
    'Python': '#e11d48',
    'HTML': '#f97316',
    'CSS': '#0ea5e9',
    'JavaScript': '#facc15',
    'MySQL': '#059669',
    'Word': '#2563eb',
    'Excel': '#16a34a',
    'PowerPoint': '#f97316',
    'Access': '#dc2626',
}[label] || '#2563eb')


const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
}

const applyTheme = (dark) => {
    const root = document.documentElement
    if (dark) {
        root.classList.add('dark')
    } else {
        root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const toggleTheme = () => {
    isDark.value = !isDark.value
}

watch(isDark, (val) => applyTheme(val))

onMounted(() => {
    // smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth'

    // load saved or system theme
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        applyTheme(true)
    }

    // react to system changes
    if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        mq.addEventListener?.('change', (e) => {
            if (!localStorage.getItem('theme')) {
                isDark.value = e.matches
            }
        })
    }
})
</script>

<style scoped>
.text-balance {
    text-wrap: balance;
}

/* إخفاء الأسهم فالموبايل */
@media (max-width: 639px) {

    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
        display: none;
    }
}

/* لون النقطة المفعّلة */
:deep(.swiper-pagination-bullet-active) {
    background: #2563eb !important;
    /* نفس لون C/Word */
}
</style>
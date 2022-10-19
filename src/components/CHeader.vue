<template>
      <header class="pw_white">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 py-3">
                    <div class="d-flex align-items-center">
                        <img src="assets/images/logo.jpg" class="pw_img_logo img-fluid lazy" alt="چرخ و فلک">
                        <div class="pw_search ms-5">
                            <form @submit.prevent="navigateToSearchPage">
                                <input type="text" v-model="search" class="pw_input_search" placeholder="جستجوی محصولات">
                            
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </form>
                        </div>
                        <div class="w-100 text-end">
<!--                            <button id="btn-mobiledarkmode">-->
<!--                                <svg xmlns="http://www.w3.org/2000/svg" class="moon" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />-->
<!--                                </svg>-->
<!--                                <svg xmlns="http://www.w3.org/2000/svg" class="sun" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />-->
<!--                                </svg>-->
<!--                            </button>-->
                            <a href="" class="btn-cart me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span>سبد خرید</span>
                            </a>
                            <a href="" class="btn-login me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>ثبت نام | ورود</span>
                            </a>
                            <a href="" id="btn-darkmode">
                                <svg xmlns="http://www.w3.org/2000/svg" class="pw_moon" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="pw_sun" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div id="navbar" class="row pw_white pw_shadow">
                <div class="col-lg-12 px-4">
                    <div class="pw_main_menu">
                        <ul>
                            <li>
                                <a href="#">
                                    صفحه اصلی
                                    
                                </a><ul>
                                        <li><a href="">sad</a></li>
                                        <li><a href="">asd</a></li>
                                        <li><a href="">weew</a></li>
                                    </ul>
                            </li>
                            <li><a href="#">محصولات</a></li>
                            <li><a href="#">پایگاه دانش</a></li>
                            <li><a href="#">درباره ما</a></li>
                            <li><a href="#">تماس با ما</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const search = ref("");
function navigateToSearchPage(){
    // router.push("search?q="+search.value);
    router.push({name:"Search", query:{q:search.value}});
}
</script>

<style>

</style>
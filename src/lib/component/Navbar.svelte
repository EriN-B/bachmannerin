<script>
import Svg from "$lib/component/Svg.svelte";
import { fade } from 'svelte/transition';

</script>
<div class="navbar bg-base-100 fixed top-0 z-50" transition:fade>
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl navbar__logo">
            <Svg viewBoxW="700.000000" viewBoxH="290.000000" translateW="0.000000" translateH="350.000000" scaleW="0.150000" scaleH="-0.1500000"/>
        </a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <a class="btn">Button</a>
    </div>
</div>

<style>
    .navbar__logo{
        width: 100px
    }
</style>
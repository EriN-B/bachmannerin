<script>
import Svg from "$lib/component/Svg.svelte";
import { fade,fly } from 'svelte/transition';

</script>
<head>
    <title>Erin Bachmann</title>
</head>
<div class="navbar bg-base-100 fixed top-0 z-50" transition:fly={{y:-100}}>
    <div class="navbar-start">
        <a class="btn btn-ghost normal-case text-xl navbar__logo">
            <Svg viewBoxW="700.000000" viewBoxH="290.000000" translateW="0.000000" translateH="350.000000" scaleW="0.150000" scaleH="-0.1500000"/>
        </a>
    </div>
    <div class="navbar-center hidden lg:flex">
    </div>
    <div class="navbar-end">
        <a class="btn" href="mailto:erin.bachmann@gmx.ch">Contact</a>
    </div>
</div>

<style>
    .navbar__logo{
        width: 100px
    }
</style>
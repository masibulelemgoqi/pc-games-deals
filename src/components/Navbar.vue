<template>
    <nav>
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
            <span>CheapShark</span>
        </div>
        <ul>
            <li><router-link to='/'>Deals</router-link> </li>
            <li> <router-link to="/games">Games</router-link></li>
            <li> <router-link to="/stores">Stores</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>
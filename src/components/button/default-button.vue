<template>
    <div>
        <button class="default-button">{{label}}</button>
    </div>
</template>
<script>
export default {
    name: "default-button",
    props: {
        label: {
            type: String,
            default: ""
        }
    }
}
</script>
<style></style>
<template>
    <div class="custom-card">
        <div class="card-content">
            <div class="card-left-side">
                <slot name="left-section"></slot>
            </div>
            <div class="card-right-side">
                <slot name="right-section"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "default-cardd"
}
</script>
<style></style>
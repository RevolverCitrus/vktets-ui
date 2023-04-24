<template>
    <div class="vk4-input" :class="{ 'vk4-input_suffix': showSuffix }">
        <input class="vk4-input_inner" :class="{ 'is-disabled': disabled }" :placeholder="placeholder"
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" :name="name" :disabled="disabled"
            :value="value" @input="handleInput">
        <span class="vk4-input_suffix">
            <i class="vk4-input_icon vk4-icon-close2" v-if="clearable && value" @click="clear"></i>
            <i class="vk4-input_icon vk4-icon-view" v-if="showPassword" @click="handlePassword"></i>
        </span>
    </div>
</template>


<script>
export default {
    name: 'vk4Input',
    data() {
        return {
            // 显示是否显示密码框
            passwordVisible: false
        }
    },
    components: {
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value)
        },
        clear() {
            this.$emit('input', '')
        },
        handlePassword() {
            this.passwordVisible = !this.passwordVisible
        }
    },
    computed: {
        showSuffix() {
            return this.clearable || this.showPassword
        }
    }
}
</script>

<style lang="scss">
.vk4-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;

    .vk4-input_inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645, 045, .355, 1);
        width: 100%;

        &:focus {
            outline: none;
            border-color: #409eff;
        }

        // input禁用样式
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}

.vk4-input_suffix {
    .vk4-input_inner {
        padding-right: 30px;
    }

    .vk4-input_suffix {
        position: absolute;
        right: 10px;
        height: 100%;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;

        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645, .045, .355, 1);
        }
    }
}
</style>


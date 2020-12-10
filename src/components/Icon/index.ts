import { h, defineComponent, mergeProps } from 'vue'

type IconProps = {
  type: string
}

const MyIcon = defineComponent({
  name: 'MyIcon',

  props: {
    type: {
      type: String,
      default: ''
    }
  },

  setup(props: IconProps, { attrs, slot }) {
    return () => h(
      'image',
      mergeProps(attrs, {
        src: require(`@/assets/icon/${props.type}.png`), // 动态引入，图片暂不分离
        mode: 'aspectFit',
        webp: true,
        style: "display: block"
      }, slot)
    )
  }
})

export default MyIcon
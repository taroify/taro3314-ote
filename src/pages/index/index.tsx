import {useState} from 'react'
import {View} from '@tarojs/components'
import './index.scss'

export default function Index() {
  const [offset, setOffset] = useState(20)
  return (
    <View className='index' onTransitionEnd={() => console.log("index ote")}>
      <View
        style={{
          transform: `translate3d(0, ${offset}px, 0)`,
          transition: "transform 100ms",
        }}
        onClick={() => {
          console.log("onClick offset")
          setOffset(offset === 20 ? 30 : 20)
        }}
        onTransitionEnd={() => console.log("ote")}
      >
        点击一下
      </View>
    </View>
  )
}

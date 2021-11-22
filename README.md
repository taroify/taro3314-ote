# Taro 在微信小程序中 onTransitionEnd 嵌套时存在不触发的问题

```tsx
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
```
### 在 weapp 上的效果

<img src="https://raw.githubusercontent.com/taroify/taro3314-ote/main/ote-weapp.gif" width="300" />

### 在 h5 上的效果

<img src="https://raw.githubusercontent.com/taroify/taro3314-ote/main/ote-h5.gif" width="300" />

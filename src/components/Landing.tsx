import { Box } from '@react-three/flex'
import { useEffectOnce, useStateList } from 'react-use'
import Text from './Text'

const titles = [
  'Full Stack Developement',
  'Smart Contract Engineering',
  'Creative Design',
]

export default function Landing() {
  const { state, prev, next } = useStateList(titles)

  useEffectOnce(() => {
    const interval = setInterval(() => next(), 6000)
    return () => clearInterval(interval)
  })

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      width="100%"
      height="100%"
      paddingTop={0.3}
    >
      <Box margin={0.05}>
        <Text fontSize={0.5} letterSpacing={0.1} textAlign="center">
          LUMEN
          <meshStandardMaterial />
        </Text>
      </Box>
      <Box margin={0.05}>
        <Text fontSize={0.5} letterSpacing={0.1} textAlign="center">
          LIMITLESS
          <meshStandardMaterial />
        </Text>
      </Box>
      <Box margin={0.01}>
        <Text fontSize={0.2} letterSpacing={0.1} textAlign="center">
          {state}
          <meshStandardMaterial />
        </Text>
      </Box>
    </Box>
  )
}

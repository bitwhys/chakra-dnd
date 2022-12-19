import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import {
  Box,
  Center,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'

export const posts = [
  {
    id: '1',
    title: "For Heaven's Cakes!",
    publishedAt: 'November 8, 2022',
  },
  {
    id: '2',
    title: 'The shape of a cupcake',
    publishedAt: 'October 23, 2022',
  },
  {
    id: '3',
    title: 'Sweet Thang Cupcakes',
    publishedAt: 'November 12, 2022',
  },
  {
    id: '4',
    title: 'Cupcake Boulevard',
    publishedAt: 'Juli 22, 2022',
  },
  {
    id: '5',
    title: 'Red Velvet Bakery',
    publishedAt: 'June 1, 2022',
  },
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <Box height="100vh" bg="gray.50" display="flex">
      <Box w="sm" borderRightWidth={1} p={3}>
        <Stack divider={<StackDivider />} spacing="4">
          {posts.map(post => (
            <Stack
              key={post.id}
              fontSize="sm"
              p="4"
              spacing="0.5"
              bg="white"
              shadow="md"
              cursor="pointer"
              userSelect="none"
            >
              <Box>
                <Text fontWeight="medium" color="emphasized">
                  {post.title}
                </Text>
                <Text color="subtle">Published {post.publishedAt}</Text>
              </Box>
              <Text
                color="muted"
                sx={{
                  '-webkit-box-orient': 'vertical',
                  '-webkit-line-clamp': '2',
                  overflow: 'hidden',
                  display: '-webkit-box',
                }}
              >
                Candy donut tart pudding macaroon. Soufflé carrot cake choc late
                cake biscuit jelly beans chupa chups dragée. Cupcake toffee
                gummies lemon drops halvah. Cookie fruitcake jelly beans
                gingerbread soufflé marshmallow.
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
      <Flex sx={{ flexGrow: 1 }} align="center">
        <Flex
          mx="auto"
          bg="white"
          w="5xl"
          borderWidth={1}
          h={768}
          shadow="lg"
          borderRadius="lg"
          direction="column"
        >
          <Box py={3} px={6} borderBottomWidth={1}>
            <HStack>
              <Box h={3} w={3} borderRadius="full" bg="red.400"></Box>
              <Box h={3} w={3} borderRadius="full" bg="yellow.400"></Box>
              <Box h={3} w={3} borderRadius="full" bg="green.400"></Box>
            </HStack>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <iframe />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default App

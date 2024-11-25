import React from 'react';
import { NativeBaseProvider, Box, Text, HStack, StatusBar, Center } from 'native-base';
import UsageExample from './src/Usage';
import CompositionExample from './src/Composition';
import DisableOverlayExample from './src/DisableOverlay';
import IconsExample from './src/Icons';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} safeArea>
        {/*---------------------Encabezado-------------------------*/}
        <Box bg="white" py={4} alignItems="center">
          <Text fontSize="5xl" color="black" fontWeight="bold">
            ActionSheet
          </Text>
        </Box>

        <HStack flex={1}>
          {/*---------------------Primer espacio con Usage-------------------------*/}
          <Box flex={1} bg="rgba(173, 216, 230, 0.8)" justifyContent="flex-start" alignItems="center" p={4}>
            <Center flex={1}>
              <UsageExample />
            </Center>
          </Box>

          {/*---------------------Segundo espacio con Composition------------------------------*/}
          <Box flex={1} bg="rgba(135, 206, 250, 0.8)" justifyContent="flex-start" alignItems="center" p={4}>
            <Center flex={1}>
              <CompositionExample />
            </Center>
          </Box>

          {/*---------------------Tercer espacio con DisableOverlay------------------------------*/}
          <Box flex={1} bg="rgba(100, 149, 237, 0.8)" justifyContent="flex-start" alignItems="center" p={4}>
            <Center flex={1}>
              <DisableOverlayExample />
            </Center>
          </Box>

          {/*---------------------Cuarto espacio con Icons------------------------------*/}
          <Box flex={1} bg="rgba(70, 130, 180, 0.8)" justifyContent="flex-start" alignItems="center" p={4}>
            <Center flex={1}>
              <IconsExample />
            </Center>
          </Box>
        </HStack>
        <StatusBar barStyle="auto" />
      </Box>
    </NativeBaseProvider>
  );
}

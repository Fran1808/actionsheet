import React from 'react';
import { Center, Button, Actionsheet, Box, Text, useDisclose } from 'native-base';

const CompositionExample = () => {
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
      return <Center>
          <Button onPress={onOpen}>Composition</Button>
          <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
            <Actionsheet.Content borderTopRadius="0">
              <Box w="100%" h={60} px={4} justifyContent="center">
                <Text fontSize="16" color="gray.500" _dark={{
                color: "gray.300"
              }}>
                  Albums
                </Text>
              </Box>
              <Actionsheet.Item>Delete</Actionsheet.Item>
              <Actionsheet.Item>Share</Actionsheet.Item>
              <Actionsheet.Item>Play</Actionsheet.Item>
              <Actionsheet.Item>Favourite</Actionsheet.Item>
              <Actionsheet.Item>Cancel</Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        </Center>;
};

export default CompositionExample;

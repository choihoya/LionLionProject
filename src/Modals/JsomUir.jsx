import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button, useDisclosure,Lorem} from '@chakra-ui/react'
function Modals({account,jsondata}) {

  const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <>

          <button onClick={onOpen} className='mr-0 hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-1 pb-1 rounded-lg'>
                                JsonUri
                    </button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>JsonUri</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* <Lorem count={2} /> */}
                <div>
                https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/{jsondata}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default Modals;
